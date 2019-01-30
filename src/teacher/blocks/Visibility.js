import React from 'react'
import { withNamespaces } from 'react-i18next'
import { FormGroup, Input, Label } from 'reactstrap'
import PropTypes from 'prop-types'
import { Card } from '../../components'

const component = ({onChange, t, value}) => (
  <Card title={t('title.state')}>
    <FormGroup check>
      <Label check>
        <Input type='radio' checked={value === 'limited'} onChange={() => onChange('visibility', 'limited')} />
        {t('field.visibility.limited')}
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type='radio' checked={value === 'available'} onChange={() => onChange('visibility', 'available')} />
        {t('field.visibility.available')}
      </Label>
    </FormGroup>
  </Card>
)

component.propTypes = {
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.oneOf(['available', 'limited']).isRequired
}

export default withNamespaces()(component)
