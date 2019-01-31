import React from 'react'
import { Container, Row } from 'reactstrap'
import template from 'dictation'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  name: 'sample',
  instruction: 'you can replace this exercise with a custom one by creating it with the teacher component',
  questions: ['question example']
}

class Component extends React.Component {

  constructor(props) {
    super(props)
    this.state = {data: initialState}
  }

  render() {
    const TeacherComponent = template.teacher
    const StudentComponent = template.student

    return (
      <div className='bg-light py-4'>
        <Container>
          <Row className='border bg-white'>
            <TeacherComponent onSubmit={data => this.setState({data})} />
          </Row>
          <Row className='mt-4 border bg-white'>
            <StudentComponent data={this.state.data} />
          </Row>
        </Container>
      </div>
    )
  }
}

export default Component
