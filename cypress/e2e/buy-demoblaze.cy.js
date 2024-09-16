describe('Demo Blaze buy thing Flow', () => {
    it('should add Samsung Galaxy 6 to the cart of Demo Blaze successfully', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.wait(1000)
        cy.contains('Samsung galaxy s6').click()
        cy.wait(1000)
        cy.contains('Add to cart').click()
        cy.wait(1000)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
          })
    })
  })