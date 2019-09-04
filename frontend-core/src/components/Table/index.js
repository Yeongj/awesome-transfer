import React from 'react'
import { Header, Segment, Grid, Icon, Table, Checkbox, Button, Breadcrumb, Image } from 'semantic-ui-react'

class myTable extends React.Component {
  state = {
    headerchecked: false,
    checked: false,
  }

  constructor() {
    super();
    this.handleHeaderChecked = this.handleHeaderChecked.bind(this); // set this, because you need get methods from CheckBox 
    this.toggle = this.toggle.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  
  handleHeaderChecked () {
    this.setState({ 
      checked: !this.state.checked || this.state.headerchecked,
      headerchecked: !this.state.headerchecked
     });
  }

  toggle () { 
    this.setState(prevState => ({ checked: !prevState.checked })) 
  }

  callAPI() {
    fetch("http://localhost:3001/getVolumeList?src=/images")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }))
        .then(res => this.render());
  }

  componentDidMount() {
    this.callAPI();
  }

  renderFolder(item) {
    if (!this.state.apiResponse) return (<Table.Row></Table.Row>)
    var dirpath = Object.keys(this.state.apiResponse)[0].split('/');
    return (
      <Table.Row>
        <Table.HeaderCell colSpan='12'>
        <Breadcrumb>
          {this.renderFolderRoute(dirpath)}
        </Breadcrumb>
        <Button.Group floated='right'>
          <Button>All</Button>
          <Button.Or />
          <Button>Files Only</Button>
          <Button.Or />
          <Button>Images Only</Button>
        </Button.Group>
        </Table.HeaderCell>
      </Table.Row>)
  }

  renderFolderRoute(dirpath) {
    let result = [];
    dirpath.forEach((item, i) => {
      if (i === dirpath.length-1) { 
        result.push(<Breadcrumb.Section key={i} active>{item}</Breadcrumb.Section>)
        return result;
      }
      result.push(<Breadcrumb.Section key={i} link>{item}</Breadcrumb.Section>)
      result.push(<Breadcrumb.Divider key={'d'+i}/>)
      });
    return result;
  }

  renderHead() {
    return (
    <Table.Header>
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
            <a href='#'>{item.name}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }
  renderPhotoRow(item, i) {
    const { checked } = this.state

    return (
      <Table.Row key={i} textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell >
          <Header>
            <Image src='http://localhost:3001/images/test.jpg' rounded size='mini' /> 
            <Header.Content>
            <a href='#'>{item.name}</a>
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
            <a href='#'>{item.name}</a>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{item.create}</Table.Cell>
      </Table.Row>
    )
  }

  renderRow() {
    if (!this.state.apiResponse) return 
    var dirpath_arr = Object.values(this.state.apiResponse)[0];
    return dirpath_arr.map((item, i) => {
      switch (item.type) {
        case 'd':
          return this.renderFolderRow(item, i);
        case 'i':
          return this.renderPhotoRow(item, i);
        case 'v':
          return this.renderPhotoRow(item, i);
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