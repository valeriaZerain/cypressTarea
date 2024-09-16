describe('Demo Blaze contact Flow', () => {
    it('should contact to Demo Blaze successfully', () => {
      cy.visit('https://www.demoblaze.com/')
      cy.get('.nav-link').contains('Contact').click()
      cy.get('#recipient-email').type('admin@gmail.com')
      cy.wait(1000)
      cy.get('#recipient-name').type('admin name')
      cy.wait(1000)
      cy.get('#message-text').type('admin message')
      cy.wait(1000)
      cy.get('.btn.btn-primary').contains('Send message').click()
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Thanks for the message!!')
      })
    })
  })