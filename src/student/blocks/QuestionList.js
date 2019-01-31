import React from 'react'
import PropTypes from 'prop-types'
import { QuestionInput } from '../../components'

function onValueChange(value, questions, index, onChange) {
  const copy = questions.slice()
  copy[index].input = value
  onChange('questions', copy)
}

const component = ({onChange, questions}) => (
  <React.Fragment>
    {questions.map((question, index) =>
      <QuestionInput
        key={index}
        value={question.input}
        onChange={value => onValueChange(value, questions, index, onChange)}
      />
    )}
  </React.Fragment>
)

component.propTypes = {
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
}

export default component
