describe('GitHub Login Flow', () => {
    it('should log in to GitHub successfully', () => {
      cy.visit('https://github.com/login');
      
      cy.get('input[name="login"]').type(Cypress.env('GITHUB_USERNAME'));
      cy.get('input[name="password"]').type(Cypress.env('GITHUB_PASSWORD'));
      
      cy.get('input[name="commit"]').click();
      
      cy.url().should('include', '/'); 
      cy.contains('Your repositories'); // Verifica un texto que solo se muestra después de iniciar sesión
    });
  });