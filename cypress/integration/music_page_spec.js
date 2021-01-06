describe('The  Page', () => {
  beforeEach(() => {
    cy.visit('/music/');
  });
  it('successfully navigates to an Album and clicks all links on Desktop view ', () => {
    cy.get('[data-cy=Apollo]').click();
    cy.get('h1').contains('Apollo - Album');
    cy.get('[data-cy=bandcamp]').click();
    cy.get('[data-cy=spotify]').click();
    cy.get('[data-cy=soundcloud]').click();
    cy.get('[data-cy=appleMusic]').click();
    cy.get('[data-cy=appleMusic]').click();
  });
  it('successfully navigates to an Album and clicks all links on Mobile view ', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=Apollo]').click();
    cy.get('h1').contains('Apollo - Album');
    cy.get('[data-cy=bandcamp]').click();
    cy.get('[data-cy=spotify]').click();
    cy.get('[data-cy=soundcloud]').click();
    cy.get('[data-cy=appleMusic]').click();
    cy.get('[data-cy=appleMusic]').click();
  });
});
