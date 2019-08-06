import React, { Component } from 'react'
import { Responsive, Menu, Segment, Icon } from 'semantic-ui-react'

class MenuHeader extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {activeItem: ''};
  }

  async handleItemClick(e, { name })  {
    await this.setState({ activeItem: name })
    console.log(this.state.activeItem)
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
          <Menu.Item header>
            <Icon name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
          </Menu.Item>
          <Menu.Item
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
          <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
            onClick={this.handleItemClick}
          />
          {/* {this.ResponsiveBreakpoints()} */}
        </Menu>
      </Segment>
    )
  }
}

export default MenuHeader;