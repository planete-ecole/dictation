import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({onClick, t}) => (
  <div className='my-3'>
    <Button block color='primary' onClick={onClick}>
      {t('action.validate')}
    </Button>
  </div>
)

component.propTypes = {
  onClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
