import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { Card } from '../../components'

const component = ({t}) => (
  <Card title={t('title.session')}>
    <p className='font-italic font-weight-normal'>{t('message.not_available')}</p>
    <Button block outline color='primary' disabled>
      {t('action.program_session')}
    </Button>
  </Card>
)

component.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces()(component)
