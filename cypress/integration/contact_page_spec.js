describe('The Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact/');
  });
  it('successfully fills out contact form and submits ', () => {
    cy.get('[data-cy=name]').type('cypress test');
    cy.get('[data-cy=email]').type('cypresstest@cypresstest.com.au');
    cy.get('[data-cy=message]').type('this is a test from cypress');
    cy.get('[data-cy=submit]').click();
    cy.location('pathname').should('not.include', 'contact');
    cy.location('pathname').should('include', 'thanks');
    cy.get('h1').contains('Thanks!');
  });
});
