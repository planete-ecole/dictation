import React from 'react'
import { withNamespaces } from 'react-i18next'
import { FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'

import Card from '../../components/Card'

const component = ({instruction, name, onChange, t}) => (
  <Card title={t('title.description')}>
    <FormGroup>
      <Input
        placeholder={t('field.name')}
        onChange={event => onChange('name', event.target.value)}
        value={name}
      />
    </FormGroup>
    <FormGroup>
      <Input
        name='instruction'
        placeholder={t('field.instruction')}
        onChange={event => onChange('instruction', event.target.value)}
        value={instruction}
      />
    </FormGroup>
  </Card>
)

component.propTypes = {
  instruction: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
