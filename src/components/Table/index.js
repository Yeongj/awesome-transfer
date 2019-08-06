import React from 'react'
import { Segment, Grid, Icon, Table } from 'semantic-ui-react'

class myTable extends React.Component {

  renderSqrImage() {}

  renderHead() {
    return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell >Git Repository</Table.HeaderCell>
        <Table.HeaderCell >Git Repository</Table.HeaderCell>
        <Table.HeaderCell >Git Repository</Table.HeaderCell>
        <Table.HeaderCell >Git Repository</Table.HeaderCell>
      </Table.Row>
    </Table.Header>)
  }
  
  renderRow() {
    return (
      <Table.Row>
        <Table.Cell collapsing>
          <Icon name='folder' /> node_modules
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          10 hours ago
        </Table.Cell>
      </Table.Row>
    )
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
            <Table celled striped>
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