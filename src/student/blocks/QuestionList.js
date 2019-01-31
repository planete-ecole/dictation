import React from 'react'
import PropTypes from 'prop-types'
import { QuestionInput } from '../../components'

function onValueChange(value, questions, index, onChange) {
  const copy = questions.slice()
  copy[index].input = value
  onChange('questions', copy)
}

const component = ({onChange, questions, voice}) => (
  <React.Fragment>
    {questions.map((question, index) =>
      <QuestionInput
        key={index}
        onChange={value => onValueChange(value, questions, index, onChange)}
        question={question}
        voice={voice}
      />
    )}
  </React.Fragment>
)

component.propTypes = {
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  voice: PropTypes.string
}

export default component
