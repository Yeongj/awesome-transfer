import React from 'react'
import { Segment, Grid, Icon, Table, Checkbox, Button } from 'semantic-ui-react'

class myTable extends React.Component {
  state = {
    headerchecked: false,
    checked: false
  }

  constructor() {
    super();
    this.handleHeaderChecked = this.handleHeaderChecked.bind(this); // set this, because you need get methods from CheckBox 
    this.toggle = this.toggle.bind(this);
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

  renderFolder() {
    return (
      <Table.Row>
        <Table.HeaderCell colSpan='12'>
        Hold Row
        </Table.HeaderCell>
      </Table.Row>)
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
  
  renderFolderRow() {
    const { checked } = this.state

    return (
      <Table.Row textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox disabled/>
        </Table.Cell>
        <Table.Cell ><Icon name='folder' /> <a href='#'>folder</a></Table.Cell>
        <Table.Cell> 10 hours ago</Table.Cell>
      </Table.Row>
    )
  }
  renderPhotoRow() {
    const { checked } = this.state

    return (
      <Table.Row textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell ><Icon name='image' /> <a href='#'>photo</a></Table.Cell>
        <Table.Cell> 10 hours ago</Table.Cell>
      </Table.Row>
    )
  }
  renderOthersRow() {
    const { checked } = this.state

    return (
      <Table.Row textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell ><Icon name='file' /> <a href='#'>others</a></Table.Cell>
        <Table.Cell> 10 hours ago</Table.Cell>
      </Table.Row>
    )
  }

  renderBody() {
    return (
      <Table.Body>
      {this.renderFolderRow()}
      {this.renderFolderRow()}
      {this.renderPhotoRow()}
      {this.renderPhotoRow()}
      {this.renderOthersRow()}
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