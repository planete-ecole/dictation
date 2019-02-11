import React from 'react'
import PropTypes from 'prop-types'
import { MarkButton, MarkMessage } from '../../components'

class component extends React.Component {

  constructor(props) {
    super(props)
    this.state = { submits: 0 }
  }

  render() {
    const errors = this.props.questions.reduce((acc, cur) => acc + (cur.answer === cur.input ? 0 : 1), 0)
    return (
      <React.Fragment>
        { this.state.submits > 0 &&
        <MarkMessage
          valid={errors === 0}
          errors={errors}
          submits={this.state.submits}
          total={this.props.questions.length}
        />}
        <MarkButton onClick={this.onMark} />
      </React.Fragment>
    )
  }

  onMark = () => {
    this.setState({submits: this.state.submits + 1})
    this.props.onMark()
  }
}

component.propTypes = {
  onMark: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
}

export default component
