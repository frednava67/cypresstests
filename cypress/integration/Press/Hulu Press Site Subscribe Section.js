const strSiteURL = 'https://www.hulu.com/press';



describe('Subscribe Section Tests', function() {
  beforeEach(function () {
    cy.visit(strSiteURL)
    cy.title().should('include', 'Hulu Press Site')
  })

  it('Subscribe Section exists', function() {
    cy.get('#page-44 > section > form > span')
      .should('include','Sign Up for Press Releases')
  })



})



















