describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('successfully navigates to Music page on Desktop view ', () => {
    cy.get('.header__nav > ul > :nth-child(2) > [data-cy=music]').click();
    cy.location('pathname').should('include', 'music');
    cy.get('h1').contains('Music');
  });
  it('successfully navigates to About page on Desktop view ', () => {
    cy.visit('/');
    cy.get('.header__nav > ul > :nth-child(3) > [data-cy=about]').click();
    cy.location('pathname').should('include', 'about');
    cy.get('h1').contains('About');
  });
  it('successfully navigates to Contact page on Desktop view ', () => {
    cy.visit('/');
    cy.get('.header__nav > ul > :nth-child(4) > [data-cy=contact]').click();
    cy.location('pathname').should('include', 'contact');
    cy.get('h1').contains('Contact');
  });
  it('successfully navigates to Music page on Mobile view ', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get(
      '.header__nav-mobile-open-content > :nth-child(1) > :nth-child(2) > [data-cy=music]'
    ).click();
    cy.location('pathname').should('include', 'music');
    cy.get('h1').contains('Music');
  });
  it('successfully navigates to About page on Mobile view ', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get(
      '.header__nav-mobile-open-content > :nth-child(1) > :nth-child(3) > [data-cy=about]'
    ).click();
    cy.location('pathname').should('include', 'about');
    cy.get('h1').contains('About');
  });
  it('successfully navigates to Contact page on Mobile view ', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get(
      '.header__nav-mobile-open-content > :nth-child(1) > :nth-child(4) > [data-cy=contact]'
    ).click();
    cy.location('pathname').should('include', 'contact');
    cy.get('h1').contains('Contact');
  });
  it('successfully clicks on all footer links on Desktop View ', () => {
    cy.get('[data-cy=facebook-footer]').click();
    cy.get('[data-cy=instagram-footer]').click();
    cy.get('[data-cy=twitter-footer]');
    cy.get('[data-cy=spotify-footer]').click();
    cy.get('[data-cy=soundcloud-footer]').click();
    cy.get('[data-cy=youtube-footer]').click();
    cy.get('[data-cy=bandcamp-footer]').click();
    cy.get('[data-cy=itunes-footer]').click();
  });
  it('successfully clicks burger menu icon and then clicks facebook link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=facebook-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks instagram link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=instagram-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks twitter link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=twitter-header]');
  });
  it('successfully clicks burger menu icon and then clicks spotify link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=spotify-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks soundcloud link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=soundcloud-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks youtube link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=youtube-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks bandcamp link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=bandcamp-header]').click();
  });
  it('successfully clicks burger menu icon and then clicks i tunes link', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=burger] > :nth-child(1)').click();
    cy.get('[data-cy=itunes-header]').click();
  });
});
