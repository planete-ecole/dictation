import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({onSubmit, t}) => (
  <div className='my-3'>
    <Button block color='primary' onClick={onSubmit}>
      {t('action.save')}
    </Button>
  </div>
)

component.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
