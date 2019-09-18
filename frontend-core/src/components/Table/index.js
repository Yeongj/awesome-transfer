import React from 'react'
import { Header, Segment, Grid, Icon, Table, Checkbox, Button, Breadcrumb, Image, Form, Popup, Modal } from 'semantic-ui-react'
import FilePlayer from 'react-player/lib/players/FilePlayer'

class myTable extends React.Component {
  state = {
    headerchecked: false,
    checked: false,
    dirpath: [],
    filesdetail: [],
    hidefilesdetail : []
  }

  constructor() {
    super();
    this.handleHeaderChecked = this.handleHeaderChecked.bind(this); // set this, because you need get methods from CheckBox 
    this.toggle = this.toggle.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleListTypeClick = this.handleListTypeClick.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
    this.fileUploadRef = React.createRef();
    this.handleVideoModalOpen = this.handleVideoModalOpen.bind(this);
    this.handleVideoModalClose = this.handleVideoModalClose.bind(this);
    this.handleImageModalOpen = this.handleImageModalOpen.bind(this);
    this.handleImageModalClose = this.handleImageModalClose.bind(this);
  }

  handleVideoModalOpen() { this.setState({videoModalOpen: true}); }
  handleVideoModalClose() { this.setState({videoModalOpen: false}); }
  handleImageModalOpen() { this.setState({imageModalOpen: true}); }
  handleImageModalClose() { this.setState({imageModalOpen: false}); }
  
  handleHeaderChecked () {
    this.setState({ 
      checked: !this.state.checked || this.state.headerchecked,
      headerchecked: !this.state.headerchecked
     });
  }

  handleDownloadClick() {
    fetch('http://localhost:3001/download')
      .then(response => {
        const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
        response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = filename;
          a.click();
      });
    });
  }

  handleUploadClick(event) {
    const files_arr = Array.from(event.target.files)    
    var data = new FormData()
    for (const file of files_arr) {
      data.append('files',file,file.name)
    }

    fetch('http://localhost:3001/upload?src='+ this.state.dirpath.join('/'), {
      method: 'POST',
      body: data
    })
}

  toggle () { 
    this.setState(prevState => ({ checked: !prevState.checked })) 
  }

  callAPI(route='/') {
    fetch("http://localhost:3001/getVolumeList?src="+route)
        .then(res => res.json())
        .then(res => {
          if (Object.keys(res)[0].length > 0) {
            this.setState({ 
              dirpath: Object.keys(res)[0].split('/'),
              filesdetail: Object.values(res)[0],
              hidefilesdetail: []
            })
            console.log(this.state)
          }
        })
  }

  componentDidMount() {
    this.callAPI();
  }

  handleFolderClick(e, data) {
    if (data) {
      console.log('DATA.NAME', data.name)
      if (data.name) this.callAPI(data.name);
    } else {
      if (e.currentTarget.name) {
        this.state.dirpath.push(e.currentTarget.name);
        this.setState({dirpath: this.state.dirpath});
        console.log('currentTarget', this.state.dirpath);
        this.callAPI(this.state.dirpath.join('/'));
      }
    }
  }

  renderImageModal(e, data) {
    return (
      <div>
        <Modal basic centered open={this.state.imageModalOpen}
          onClose={this.handleImageModalClose}
          closeIcon='close'
          size={'fullscreen'}
        >
          <Header icon='video' content='Video' />
          <Modal.Content>
          <image src=''></image>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={this.handleImageModalClose}>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>)
  }

  renderVideoModal(e, data) {
    return (
      <div>
        <Modal basic centered open={this.state.videoModalOpen}
          onClose={this.handleVideoModalClose}
          closeIcon='close'
          size={'fullscreen'}
        >
          <Header icon='video' content='Video' />
          <Modal.Content>
          <FilePlayer
                url='http://localhost:3001/images/FILE0019.mov'
                light={true}
                volume={1}
                controls={true}
                fileconfig={{forceVideo:true}}
                />
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={this.handleVideoModalClose}>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>)
  }

  handleListTypeClick(e, {name}) {
    if (name !== 'all') {
      let hide = [];
      this.setState({
        filesdetail: this.state.filesdetail.concat(this.state.hidefilesdetail).filter( detail =>  {
          if (name === 'file') {
            if (detail.type !== 'o') {
              hide.push(detail);
            } else {
              return true
            }
          };
          if (name === 'image') {
            if (detail.type !== 'i') {
              hide.push(detail);
            } else {
              return true
            }
          };
          if (name === 'imagevideo') {
            if (detail.type === 'i' || detail.type === 'v') {
              return true
            } else {
              hide.push(detail);
            }
          };
        }),
        hidefilesdetail: hide,
      })
    } else {
      this.setState({
        filesdetail: this.state.filesdetail.concat(this.state.hidefilesdetail),
        hidefilesdetail : []
      })
    }
  }

  renderEdit() {
    if (!this.state.dirpath) return (<Table.Row></Table.Row>)
    return (
      <Table.Row>
        <Table.HeaderCell colSpan='12'>
        <Button.Group floated='left'>
          <Button name='all' onClick={this.handleListTypeClick}>All</Button>
          <Button.Or />
          <Button name='file' onClick={this.handleListTypeClick}>Files Only</Button>
          <Button.Or />
          <Button name='image' onClick={this.handleListTypeClick}>Images Only</Button>
          <Button.Or />
          <Button name='imagevideo' onClick={this.handleListTypeClick}>Images and Video</Button>
        </Button.Group>
        <Button.Group floated='right'>
        <Form>
          <Popup
            trigger={<Button icon="upload" onClick={()=>this.fileUploadRef.current.click()} />}
            content='Upload!'
            on='hover' />        
          <input ref={this.fileUploadRef} type="file" multiple hidden onChange={this.handleUploadClick} />
          <Popup
            trigger={<Button name='download' onClick={this.handleDownloadClick} icon='download'></Button>}
            content='Download!'
            on='hover' />
        </Form>
        </Button.Group>
        </Table.HeaderCell>
      </Table.Row>)
  }

  renderFolder() {
    if (!this.state.dirpath) return (<Table.Row></Table.Row>)
    return (
      <Table.Row>
        <Table.HeaderCell colSpan='12'>
        <Breadcrumb>
          {this.renderFolderRoute()}
        </Breadcrumb>
        </Table.HeaderCell>
      </Table.Row>)
  }

  renderFolderRoute() {
    if (this.state.dirpath.length > 0) {
      return this.state.dirpath.map((item, i) => {
        if (i === this.state.dirpath.length-1) { 
          return (<Breadcrumb.Section key={i} active>{item}</Breadcrumb.Section>);
        }
        return ([<Breadcrumb.Section key={i} link name={this.state.dirpath.slice(0,i+1).join('/')} onClick={this.handleFolderClick}>{item}</Breadcrumb.Section>,
      <Breadcrumb.Divider key={'d'+i}/>]);
        });
    } else {
      return (<Breadcrumb.Divider/>)
    }
  }

  renderHead() {
    return (
    <Table.Header>
      {this.renderEdit()}
      {this.renderFolder()}
      <Table.Row>
        <Table.HeaderCell >
        <Button compact="true" size='small' floated='right' onClick={this.handleHeaderChecked}>
          Select All
        </Button>
        </Table.HeaderCell>
        {/* <Table.HeaderCell compact="true">Type</Table.HeaderCell> */}
        <Table.HeaderCell >Name</Table.HeaderCell>
        <Table.HeaderCell >Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>)
  }
  
  renderFolderRow(item, i) {
    return (
      <Table.Row key={i} textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox disabled/>
        </Table.Cell>
        <Table.Cell >
          <Header>
            <Icon name='folder' />
            <Header.Content>
            <a href="javascript:void(0)" onClick={this.handleFolderClick} name={item.name}>{item.name}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }
  renderVideoRow(item, i) {
    const { checked } = this.state

    return (
      <Table.Row key={i} textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell >
          <Header>
          <Icon name='video' />
            <Header.Content>
            <a href='javascript:void(0)' onClick={this.handleVideoModalOpen}>{item.name}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }
  renderImageRow(item, i) {
    const { checked } = this.state

    return (
      <Table.Row key={i} textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell >
          <Header>
            <Image src={'http://localhost:3001/'+this.state.dirpath.slice(2,i+1).join('/')+'/'+item.name} rounded size='mini' /> 
            <Header.Content>
            <a href='javascript:void(0)' onClick={this.handleImageModalOpen}>{item.name}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }
  renderOthersRow(item, i) {
    const { checked } = this.state

    return (
      <Table.Row key={i} textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell >
          <Header>
            <Icon name='file' />
            <Header.Content>
            {item.name}
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }

  renderRow() {
    if (!this.state.filesdetail) return
    return this.state.filesdetail.map((item, i) => {
      switch (item.type) {
        case 'd':
          return this.renderFolderRow(item, i);
        case 'i':
          return this.renderImageRow(item, i);
        case 'v':
          return this.renderVideoRow(item, i);
        default:
          return this.renderOthersRow(item, i);
      }
    })
  }

  renderBody() {
    return (
      <Table.Body>
        {this.renderRow()}
      </Table.Body>
      )
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={12}>
          <Segment>
          {this.renderVideoModal()}
          {this.renderImageModal()}
            <Table celled structured>
              {this.renderHead()}
              {this.renderBody()}
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default myTable;