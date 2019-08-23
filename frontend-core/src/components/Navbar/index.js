/*import React, { Component } from 'react'
import { Responsive, Menu, Segment, Icon } from 'semantic-ui-react'
import { Route, NavLink, Link, HashRouter } from "react-router-dom";
import logo from "../App/logo.svg";
import "../App/App.css";

class MenuHeader extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      activeItem: '',
      isActive: false
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  ResponsiveBreakpoints() {
    return (
      <Segment.Group>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          Mobile
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
          Tablet
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          Computer
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyLargeScreen}>
          Large Screen
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyWidescreen}>
          Widescreen
        </Responsive>
      </Segment.Group>
    )
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted fixed="top">
          <HashRouter>
          <Menu.Item header>
            <Icon name='home'/>
            {/* <img src={logo} className="App-logo" alt="logo" /> }
          </Menu.Item>
          <Menu.Item name='Api' onClick={this.handleItemClick}>
            <NavLink to="/Api">aboutUs</NavLink>
          </Menu.Item>
          <Menu.Item name='jobs' onClick={this.handleItemClick} >
            <NavLink to="/Table">aboutUs</NavLink>
          </Menu.Item>
          <Menu.Item
            name='locations'
            onClick={this.handleItemClick}
          >
            <NavLink to="/Gallary">
              locations
            </NavLink>
          </Menu.Item>
          {/* {this.ResponsiveBreakpoints()} }
          </HashRouter>
        </Menu>
      </Segment>
    )
  }
}*/

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'semantic-ui-react'
import Table from '../Table';
import Gallery from '../Gallery';
import Api from '../Init';

class Navbar extends Component {
  items = [
    { key: 'header', header:true, content: <Icon name='home'/>},
    { key: 'Api', active: true, name: 'Api', onClick: this.handleItemClick},
    { key: 'Table', name: 'Table', onClick: this.handleItemClick},
    { key: 'Gallery', name: 'Gallery', onClick: this.handleItemClick},
  ]

  handleItemClick(e, {name}) {
    if (name === 'Api') ReactDOM.render(<Api />,document.getElementById('app'));
    if (name === 'Table') ReactDOM.render(<Table />,document.getElementById('app'));
    if (name === 'Gallery') ReactDOM.render(<Gallery />,document.getElementById('app'));
  };

  render() {
    return (<Menu fixed={'top'} inverted={true} items={this.items} />);
  }
}

export default Navbar;