import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({onSubmit, t}) => (
  <Button block color='primary' onClick={onSubmit}>
    {t('action.save')}
  </Button>
)

component.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
