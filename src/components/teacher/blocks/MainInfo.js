import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Card, CardBody, CardHeader } from 'reactstrap'

const component = ({t}) => (
  <Card>
    <CardHeader>
      <h6>{t('title')}</h6>
    </CardHeader>
    <CardBody>
      yolo
    </CardBody>
  </Card>
)

export default withNamespaces()(component)
