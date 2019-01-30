import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { MainInfo, Questions, Session, Settings, Visibility } from './blocks'

class TeacherComponent extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col className='col-lg-8'>
            <MainInfo />
            <Questions />
          </Col>
          <Col className='col-lg-4'>
            <Session />
            <Settings />
            <Visibility />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TeacherComponent
