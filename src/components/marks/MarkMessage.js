import React from 'react'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

const component = ({errors, submits, t, total, valid}) => {
  if (valid && submits < 2) {
    return <p>{t('message.mark.success_first_attempt')}</p>
  }
  else if (valid) {
    return <p>{t('message.mark.success_correction_done')}</p>
  }
  else {
    return <p>{t('message.mark.error', {correct: total - errors, total})}</p>
  }
}

component.propTypes = {
  errors: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  valid: PropTypes.bool.isRequired
}

export default withNamespaces()(component)
