import React from 'react'
import PropTypes from 'prop-types'
import { MarkButton, MarkMessage } from '../../components'

const component = ({onMark, questions}) => {
  console.log(questions)
  const errors = questions.reduce((acc, cur) => acc + (cur.answer === cur.input ? 0 : 1), 0)

  return (
    <React.Fragment>
      <MarkMessage valid={errors === 0} errors={errors} total={questions.length} />
      <MarkButton onClick={onMark} />
    </React.Fragment>
  )
}

component.propTypes = {
  onMark: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
}

export default component
