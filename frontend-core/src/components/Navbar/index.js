import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Icon, Modal, Header, Button, Popup, Container, Table } from 'semantic-ui-react'
import ItemTable from '../ItemTable';
import Gallery from '../Gallery';
import Api from '../Init';
import Settings from '../Settings';
import "./Navbar.css";

class Navbar extends Component {
  state = {
    menuItems: [],
    modalOpen: false
  }

  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeMenuItem = this.handleChangeMenuItem.bind(this);
  }

  handleOpen(e, {name}) {
    this.setState({
      modalOpen: true,
      modalType: name
    }); }
  handleClose() {
    this.setState({modalOpen: false}); 
  }

  handleItemClick(e, {name}) {
    switch(name) {
      case 'Api':
        ReactDOM.render(<Api />,document.getElementById('app'));
        break;
      case 'Table':
        ReactDOM.render(<ItemTable />,document.getElementById('app'));
        break;
      case 'Gallery':
        ReactDOM.render(<Gallery />,document.getElementById('app'));
        break;
      case 'Settings':
          ReactDOM.render(<Settings />,document.getElementById('app'));
          break;
      default:
        ReactDOM.render(<itemTable />,document.getElementById('app'));
        break;
    }
  };

  handleChangeMenuItem(e, {name}) {
    name === 'rmall'? this.setState({menuItems:[]}) : name === 'remove'? this.state.menuItems.pop('Item') : this.state.menuItems.push('Item');
    this.setState({
      menuItems: this.state.menuItems
    })
  }

  renderAddMenuItem() {
    return (<p>add</p> )
  }

  renderRemoveMenuItem() {
    return (<Table celled striped inverted textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell><Button name='rmall' onClick={this.handleChangeMenuItem}>Remove all</Button></Table.HeaderCell>
          <Table.HeaderCell>Item name</Table.HeaderCell>
          <Table.HeaderCell>Route</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing><Button circular name='remove' icon='minus' color='red' size='small' onClick={this.handleChangeMenuItem}></Button></Table.Cell>
          <Table.Cell collapsing>node_modules</Table.Cell>
          <Table.Cell>/src/components/ItemTable/</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>)
  }

  renderMenuItem() {
    return this.state.menuItems.length > 0 ? this.state.menuItems.map( (item, index) => {
      return (<Menu.Item
        name={item}
        onClick={this.handleItemClick}
      >
      {item}
      </Menu.Item>)
    }) : [];
  }

  renderFolderIcon(type) {
    return (<Icon.Group >
        <Icon size='large' name='folder outline' />
        {type==='add' ? <Icon corner name='add' /> : <Icon corner name='minus' />}
      </Icon.Group>)
  }

  renderFolderModal() {
    return (
      <Container>
        <Modal centered open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Header icon={this.renderFolderIcon(this.state.modalType)} content='  Select a folder to operate.' />
          <Modal.Content scrolling>
          {this.state.modalType === 'add' ? this.renderAddMenuItem() : this.renderRemoveMenuItem()}
          </Modal.Content>
          <Modal.Actions>
          {this.state.modalType === 'add' ?
            (<Button basic color='green' inverted icon='checkmark' name='add' onClick={this.handleChangeMenuItem}>Add
            </Button>) : 
            (<Button basic color='red' inverted icon='remove' name='remove' onClick={this.handleChangeMenuItem}>Remove
            </Button>)}
            <Button color='green' inverted icon='checkmark' onClick={this.handleClose}>Done
            </Button>
          </Modal.Actions>
        </Modal>
      </Container>)
  }

  render() {
    return [
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
        {this.renderMenuItem()}
        <Menu.Menu position='right'>
          <Menu.Item
            name='Settings'
            onClick={this.handleItemClick}
          >
          <Popup
            trigger={<Icon name="setting layout"></Icon>}
            content="Settings"
            basic
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>),
    this.renderFolderModal()
    ]
  }
}

export default Navbar;