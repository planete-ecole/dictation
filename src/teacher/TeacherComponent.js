import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import { MainInfo, QuestionList, Session, Settings, Submit, Visibility } from './blocks'

const defaultState = {
  name: '',
  instruction: '',
  questions: [''],
  random: false,
  length: 0,
  visibility: 'available',
  voice: 'fr-FR-Wavenet-D'
}

class TeacherComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...defaultState, ...props.data }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className='col-lg-8'>
            <MainInfo instruction={this.state.instruction} name={this.state.name} onChange={this.onChange} />
            <QuestionList questions={this.state.questions} onChange={this.onChange} />
          </Col>
          <Col className='col-lg-4'>
            <Settings random={this.state.random} onChange={this.onChange} />
            <Visibility value={this.state.visibility} onChange={this.onChange} />
            <Session />
            <Submit onSubmit={() => this.props.onSubmit(this.state)} />
          </Col>
        </Row>
      </Container>
    )
  }

  onChange = (property, value) => this.setState({[property]: value})
}

TeacherComponent.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default TeacherComponent
