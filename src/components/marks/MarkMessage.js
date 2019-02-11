import React from 'react'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

const component = ({errors, t, total, valid}) => (
  valid
    ? <p>{t('message.mark.success_first_attempt')}</p>
    : <p>{t('message.mark.error', { correct: total - errors, total })}</p>
)

component.propTypes = {
  errors: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  valid: PropTypes.bool.isRequired
}

export default withNamespaces()(component)
