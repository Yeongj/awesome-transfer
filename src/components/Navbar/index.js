import React, { Component } from 'react'
import { Responsive, Menu, Segment, Icon } from 'semantic-ui-react'
import { Route, NavLink, Link, HashRouter } from "react-router-dom";

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
        <Menu inverted stackable>
          <HashRouter>
          <Menu.Item header>
            <Icon name='home'/>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/">aboutUs</NavLink>
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
          {/* {this.ResponsiveBreakpoints()} */}
          </HashRouter>
        </Menu>
      </Segment>
    )
  }
}

export default MenuHeader;