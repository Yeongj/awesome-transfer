import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class gallary extends React.Component {
  renderRoundedImage () {
    return  <Image src="holder.js/171x180" rounded />
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            {this.renderRoundedImage()}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default gallary;