import React from 'react';
import { Grid, Image} from 'semantic-ui-react'

class Gallery extends React.Component {
  state = {
    userInput: ['https://react.semantic-ui.com/images/wireframe/square-image.png', 'https://react.semantic-ui.com/images/wireframe/square-image.png'],
  };

  constructor() {
    super()
    this.renderImageGrid = this.renderImageGrid.bind(this)
  }

  renderImageGrid () {
    return this.state.userInput.map(function(item){
      return (<Grid.Column><Image src={item} size={'tiny'} rounded={true}/></Grid.Column>)
    });
  }

  render() {
    return (
      <Grid centered container columns={6}>
        {this.renderImageGrid()}
      </Grid>
    )
  }
}

export default Gallery;