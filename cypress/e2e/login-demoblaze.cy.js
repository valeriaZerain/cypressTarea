describe('Demo Blaze login Flow', () => {
  it('should log in to Demo Blaze successfully', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('admin')
    cy.wait(1000)
    cy.get('#loginpassword').type('admin')
    cy.wait(1000)
    cy.get('button').contains('Log in').click()
    cy.wait(1000)
    cy.get('#nameofuser').should('contain', 'Welcome admin')
  })
})