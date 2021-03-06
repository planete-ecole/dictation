import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import { MarkButton, QuestionList } from './blocks'

const derive = data => ({ ...data, questions: data.questions.map(question => ({ input: '', answer: question })) })

class StudentComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = derive(props.data)
  }

  static getDerivedStateFromProps(props, state) {
    const normalized = { ...state, questions: state.questions.map(question => question.answer) }

    if (JSON.stringify(normalized) !== JSON.stringify(props.data)) {
      return derive(props.data)
    }

    return null
  }

  render() {
    return (
      <Container fluid>
        <h1>{ this.state.name }</h1>
        <p>{ this.state.instruction }</p>
        <QuestionList questions={this.state.questions} onChange={this.onChange} voice={this.state.voice} />
        <MarkButton />
      </Container>
    )
  }

  onChange = (key, value) => this.setState({[key]: value})
}

StudentComponent.propTypes = {
  data: PropTypes.object.isRequired
}

export default StudentComponent
