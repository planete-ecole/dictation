import React from 'react'
import { withNamespaces } from 'react-i18next'
import { FormGroup, Input, Label } from 'reactstrap'
import PropTypes from 'prop-types'
import { Card } from '../../components'

const component = ({length, onChange, random, t}) => (
  <Card title={t('title.settings')}>
    <FormGroup>
      <FormGroup check>
        <Label check>
          <Input type='checkbox' onChange={() => onChange('random', !random)} checked={random} />
          {t('field.random')}
        </Label>
      </FormGroup>
    </FormGroup>
    <FormGroup>
      <Input type='number' placeholder={t('field.length')} value={length} onChange={onChange} disabled />
    </FormGroup>
  </Card>
)

component.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  random: PropTypes.bool,
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
