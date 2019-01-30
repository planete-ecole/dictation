import React from 'react'

import template from 'dictation'

import 'bootstrap/dist/css/bootstrap.min.css'

const component = () => {
  const TeacherComponent = template.teacher
  const StudentComponent = template.student
  return (
    <div>
      <TeacherComponent />
      <StudentComponent />
    </div>
  )
}

export default component
