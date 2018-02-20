const slctrNav = '#page-44 > header > div.regular-menu > nav';

describe('Top Nav Existence Test', function() {
    it('Visits the Hulu Press area', function() {
      cy.visit('https://www.hulu.com/press')
      cy.title().should('include', 'Hulu Press Site')

      cy.get(slctrNav).contains('News')

      cy.get(slctrNav).contains('Schedule')
      cy.get(slctrNav).contains('Hulu Originals')
      cy.get(slctrNav).contains('New Exclusives')
      cy.get(slctrNav).contains('Corporate')
      cy.get(slctrNav).contains('Contact')
      cy.get(slctrNav).contains('Screening Room')
    })

})
