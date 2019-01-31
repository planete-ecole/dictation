import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({t}) => (
  <Button block color='primary'>
    {t('action.validate')}
  </Button>
)

component.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
