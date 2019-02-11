import React from 'react'
import { Button, FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import { withAudio } from 'connector'
import PropTypes from 'prop-types'

const component = ({audio, isMarked, onChange, question, voice}) => (
  <FormGroup>
    <InputGroup>
      <InputGroupAddon addonType='prepend'>
        <Button color='primary' onClick={() => audio.play(question.answer, voice, 2, 1)}>
          <i className='fas fa-volume-up' />
        </Button>
      </InputGroupAddon>
      <Input
        value={question.input}
        onChange={event => onChange(event.target.value)}
        valid={isMarked && question.answer === question.input}
        invalid={isMarked && question.answer !== question.input}
      />
      <FormFeedback>{question.answer}</FormFeedback>
    </InputGroup>
  </FormGroup>
)

component.propTypes = {
  audio: PropTypes.object.isRequired,
  isMarked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  voice: PropTypes.string.isRequired
}

export default withAudio(component)
