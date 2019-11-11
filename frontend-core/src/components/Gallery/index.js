import React from 'react';
import { Grid, Image, Card, Icon, Segment, Checkbox, Popup } from 'semantic-ui-react'

class Gallery extends React.Component {
  state = {
    userInput: ['http://localhost:3001/images/test.jpg', 'http://localhost:3001/images/test2.png'],
    src: 'http://localhost:3001/images/test.jpg'
  };

  constructor() {
    super()
  }

  renderFolderCard = () => (
    <Card>
      <Card.Content header='center'>
        <Checkbox label='File Name' disabled/>
      </Card.Content>
      <Icon name="folder" fitted={true} size='massive' height={150}></Icon>
      <Card.Content extra>
      <Grid columns={4} stackable>
      <Grid.Column>
        <Popup
          trigger={<Icon name='edit outline' disabled/>}
          content="rename"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='copy outline' disabled/>}
          content="copy"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='trash alternate outline' disabled/>}
          content="delete"
          basic
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Icon name='info circle' disabled/>}
          content="detail"
          basic
        />
      </Grid.Column>
      </Grid>
      </Card.Content>
    </Card>
  )

  renderImageCard = () => (
    <Card>
      <Card.Content>
        <Checkbox label='File Name' />
      </Card.Content>
      <Image src='http://localhost:3001/images/test2.png' fluid height={150}/>
      <Card.Content extra>
      <Grid columns={4} stackable>
      <Grid.Column>
        <Popup
          trigger={<Icon name='edit outline'/>}
          content="rename"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='copy outline'/>}
          content="copy"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='trash alternate outline'/>}
          content="delete"
          basic
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Icon name='info circle'/>}
          content="detail"
          basic
        />
      </Grid.Column>
      </Grid>
      </Card.Content>
    </Card>
  )

  renderVideoCard = () => (
    <Card>
      <Card.Content>
        <Checkbox label='File Name' />
      </Card.Content>
      <Image src='http://localhost:3001/images/test.jpg' fluid height={150}/>
      <Card.Content extra>
      <Grid columns={4} stackable>
      <Grid.Column>
        <Popup
          trigger={<Icon name='edit outline'/>}
          content="rename"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='copy outline'/>}
          content="copy"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='trash alternate outline'/>}
          content="delete"
          basic
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Icon name='info circle'/>}
          content="detail"
          basic
        />
      </Grid.Column>
      </Grid>
      </Card.Content>
    </Card>
  )

  renderFileCard = () => (
    <Card>
      <Card.Content>
        <Checkbox label='File Name' disabled/>
      </Card.Content>
      <Icon fitted={true} name="file" size='massive' height={150}></Icon>
      <Card.Content extra>
      <Grid columns={4} stackable>
      <Grid.Column>
        <Popup
          trigger={<Icon name='edit outline' disabled/>}
          content="rename"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='copy outline' disabled/>}
          content="copy"
          basic
        />
        </Grid.Column>
        <Grid.Column>
        <Popup
          trigger={<Icon name='trash alternate outline' disabled/>}
          content="delete"
          basic
        />
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Icon name='info circle'/>}
          content="detail"
          basic
        />
      </Grid.Column>
      </Grid>
      </Card.Content>
    </Card>
  )

  renderCardGrid = () => (
    <Card.Group stackable itemsPerRow={6}>
      {this.renderFolderCard()}
      {this.renderFolderCard()}
      {this.renderFolderCard()}
      {this.renderImageCard()}
      {this.renderImageCard()}
      {this.renderImageCard()}
      {this.renderImageCard()}
      {this.renderImageCard()}
      {this.renderVideoCard()}
      {this.renderFileCard()}
      {this.renderFileCard()}
      {this.renderFileCard()}
      {this.renderFileCard()}
    </Card.Group>
  )

  renderImageGrid() {
    return this.state.userInput.map(function (item) {
      return (<Image.Group><Image src={item} size={'tiny'} rounded={true} /></Image.Group>)
    });
  }

  render() {
    return (
      <Grid container centered columns={10}>
        <Grid.Column width={16}>
          <Segment>
            {/* {this.renderImageGrid()} */}
            {this.renderCardGrid()}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Gallery;