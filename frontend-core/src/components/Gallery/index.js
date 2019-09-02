import React from 'react';
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class Gallery extends React.Component {
  state = {
    userInput: ['https://react.semantic-ui.com/images/wireframe/square-image.png', 'https://react.semantic-ui.com/images/wireframe/square-image.png'],
    src: 'https://react.semantic-ui.com/images/wireframe/square-image.png'
  };

  constructor() {
    super()
    this.renderImageGrid = this.renderImageGrid.bind(this)
  }

  CardExampleCard = () => (
    <Card>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' wrapped ui={false} />
      {/* <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content> */}
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )

  CardExampleColumnCount = () => (
    <Card.Group itemsPerRow={6}>
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
      {this.CardExampleCard()}
    </Card.Group>
  )

  renderImageGrid() {
    return this.state.userInput.map(function (item) {
      return (<Grid.Column><Image src={item} size={'tiny'} rounded={true} /></Grid.Column>)
    });
  }

  render() {
    return (
      <Grid centered container columns={6}>
        {/* {this.renderImageGrid()} */}
        {this.CardExampleColumnCount()}
      </Grid>
    )
  }
}

export default Gallery;