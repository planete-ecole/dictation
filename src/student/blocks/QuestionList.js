import React from 'react'
import PropTypes from 'prop-types'
import { QuestionInput } from '../../components'

function onValueChange(value, questions, index, onChange) {
  const copy = questions.slice()
  copy[index].input = value
  onChange('questions', copy)
}

const component = ({isMarked, onChange, questions, voice}) => (
  <React.Fragment>
    {questions.map((question, index) =>
      <QuestionInput
        isMarked={isMarked}
        key={index}
        onChange={value => onValueChange(value, questions, index, onChange)}
        question={question}
        voice={voice}
      />
    )}
  </React.Fragment>
)

component.propTypes = {
  isMarked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  voice: PropTypes.string
}

export default component
