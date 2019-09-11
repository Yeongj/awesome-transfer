import React from 'react';
import { Grid, Image, Card, Icon, Segment, Header } from 'semantic-ui-react'

class Gallery extends React.Component {
  state = {
    userInput: ['http://localhost:3001/images/test.jpg', 'http://localhost:3001/images/test.jpg'],
    src: 'http://localhost:3001/images/test.jpg'
  };

  constructor() {
    super()
    this.renderImageGrid = this.renderImageGrid.bind(this)
  }

  folderCard = () => (
    <Card>
      <Icon fitted={true} name="folder" size='massive' height={150}></Icon>
      {/* <Image src='http://localhost:3001/images/test.jpg' wrapped ui={false} /> */}
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

  imageCard = () => (
    <Card>
      <Image src='http://localhost:3001/images/test.jpg' width={250}/>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )

  fileCard = () => (
    <Card>
      <Icon fitted={true} name="file" size='massive' width={200}></Icon>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )

  CardExampleColumnCount = () => (
    <Card.Group stackable itemsPerRow={6}>
      {this.folderCard()}
      {this.folderCard()}
      {this.folderCard()}
      {this.imageCard()}
      {this.imageCard()}
      {this.imageCard()}
      {this.imageCard()}
      {this.imageCard()}
      {this.imageCard()}
      {this.fileCard()}
      {this.fileCard()}
      {this.fileCard()}
      {this.fileCard()}
    </Card.Group>
  )

  renderImageGrid() {
    return this.state.userInput.map(function (item) {
      return (<Grid.Column><Image src={item} size={'tiny'} rounded={true} /></Grid.Column>)
    });
  }

  render() {
    return (
      <Grid container centered columns={6}>
        <Grid.Column width={12}>
          <Segment>
            {/* {this.renderImageGrid()} */}
            {this.CardExampleColumnCount()}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Gallery;