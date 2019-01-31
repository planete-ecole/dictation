import template from './'

describe('template', () => {
  it('is truthy', () => {
    expect(template.name).toBeTruthy()
    expect(template.student).toBeTruthy()
    expect(template.teacher).toBeTruthy()
  })
})
