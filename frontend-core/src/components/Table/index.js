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
      checked: !this.state.checked || !this.state.headerchecked,
      headerchecked: !this.state.headerchecked
     });
  }

  toggle () { 
    this.setState(prevState => ({ checked: !prevState.checked })) 
  }

  renderFolder() {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell >
          Hold Row
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>)
  }

  renderHead() {
    return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell >
        <Button compact size='small' floated='right' onClick={this.handleHeaderChecked}>
          Select All
        </Button>
          {/* <Checkbox name='headerCheckBox' onClick={this.handleHeaderChecked}/> */}
        </Table.HeaderCell>
        <Table.HeaderCell compact>Type</Table.HeaderCell>
        <Table.HeaderCell >Name</Table.HeaderCell>
        <Table.HeaderCell >Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>)
  }
  
  renderRow() {
    const { checked } = this.state

    return (
      <Table.Row textAlign='center'>
        <Table.Cell collapsing>
          <Checkbox name='rowCheckBox' checked={checked} onClick={this.toggle}/>
        </Table.Cell>
        <Table.Cell collapsing><Icon name='folder' /></Table.Cell>
        <Table.Cell> Name</Table.Cell>
        <Table.Cell> 10 hours ago</Table.Cell>
      </Table.Row>
    )
  }

  renderBody() {
    return (
      <Table.Body>
      {this.renderRow()}
      {this.renderRow()}
      {this.renderRow()}
      {this.renderRow()}
      {this.renderRow()}
      </Table.Body>
      )
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={12}>
          <Segment>
            <Table celled striped>
              {this.renderFolder()}
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