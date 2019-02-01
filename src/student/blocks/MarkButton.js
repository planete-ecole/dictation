import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({t}) => (
  <div className='my-3'>
    <Button block color='primary'>
      {t('action.validate')}
    </Button>
  </div>
)

component.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
