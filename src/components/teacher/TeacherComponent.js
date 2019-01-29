import React from 'react'
import { MainInfo, Questions, Session, Settings, Visibility } from './blocks'

class TeacherComponent extends React.Component {

  render() {
    return (
      <React.Fragment>
        <MainInfo />
        <Questions />
        <Session />
        <Settings />
        <Visibility />
      </React.Fragment>
    )
  }
}

export default TeacherComponent
