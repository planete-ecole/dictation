import React from 'react'
import { Container, Row } from 'reactstrap'
import { withMocks } from 'connector'
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
      <Container fluid className='bg-light py-4'>
        <Row>
          <div className='col-xl-6'>
            <h2 className='text-center'>Teacher Component</h2>
            <div className='border bg-white'>
              <TeacherComponent onSubmit={data => this.setState({data})} />
            </div>
          </div>
          <div className='col-xl-6'>
            <h2 className='text-center'>Student Component</h2>
            <div className='border bg-white'>
              <StudentComponent data={this.state.data} />
            </div>
          </div>
        </Row>
      </Container>
    )
  }
}

export default withMocks(Component)
