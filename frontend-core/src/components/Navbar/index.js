import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Icon, Modal, Header, Button, Popup } from 'semantic-ui-react'
import Table from '../Table';
import Gallery from '../Gallery';
import Api from '../Init';

class Navbar extends Component {
  state = {
    items: [],
    modalOpen: false
  }

  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleItemClick(e, {name}) {
    if (name === 'Api') ReactDOM.render(<Api />,document.getElementById('app'));
    if (name === 'Table') ReactDOM.render(<Table />,document.getElementById('app'));
    if (name === 'Gallery') ReactDOM.render(<Gallery />,document.getElementById('app'));
  };

  handleOpen() { this.setState({modalOpen: true}); }
  handleClose() { this.setState({modalOpen: false}); }

  renderMenuItem(name) {
    return (<Menu.Item
      name={name}
      onClick={this.handleItemClick}
    >
    {name}
    </Menu.Item>)
  }
  renderModalIcon() {
    return (<Icon.Group >
        <Icon size='large' name='folder outline' />
        <Icon corner name='add' />
      </Icon.Group>)
  }

  showFolderModal() {
    return (
    <Modal centered open={this.state.modalOpen}
      onClose={this.handleClose}
      basic
      size='small'
    >
      <Header icon={this.renderModalIcon()} content='Select a folder.' />
      <Modal.Content>
        <p>
          aaaaaaa
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>)
  }

  render() {
    return [this.showFolderModal(),
    (<Menu fixed="top" inverted={true}>
        <Menu.Item
          name='add'
          onClick={this.handleOpen}
        >
          <Popup
            trigger={<Icon name='add'/>}
            content="add one"
            basic
          />
        </Menu.Item>
        <Menu.Item
          name='minus'
          onClick={this.handleOpen}
        >
          <Popup
            trigger={<Icon name='minus'/>}
            content="remove one"
            basic
          />
        </Menu.Item>
        <Menu.Item
          name='Api'
          onClick={this.handleItemClick}
        >
          Api
        </Menu.Item>
        <Menu.Item
          name='Table'
          onClick={this.handleItemClick}
        >
          Table
        </Menu.Item>
        <Menu.Item
          name='Gallery'
          onClick={this.handleItemClick}
        >
          Gallery
        </Menu.Item>
        
        <Menu.Menu position='right'>
        <Menu.Item
          name='list'
          onClick={this.handleItemClick}
        >
          <Popup
            trigger={<Icon name="unordered list"></Icon>}
            content="list"
            basic
          />
        </Menu.Item>

        <Menu.Item
          name='grid'
          onClick={this.handleItemClick}
        >
          <Popup
            trigger={<Icon name="grid layout"></Icon>}
            content="grid"
            basic
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>)
    ]
  }
}

export default Navbar;