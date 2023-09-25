import { loginData } from '../fixtures/login-data'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    console.log({ loginData })
  })
})
