import React from 'react'

import template from 'dictation'

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
