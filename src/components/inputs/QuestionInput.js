import React from 'react'
import { Button, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({onChange, value}) => (
  <FormGroup>
    <InputGroup>
      <InputGroupAddon addonType='prepend'>
        <Button color='primary' onClick={() => console.log('play')}>
          <i className='fas fa-volume-up' />
        </Button>
      </InputGroupAddon>
      <Input value={value} onChange={event => onChange(event.target.value)} />
    </InputGroup>
  </FormGroup>
)

component.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default component
