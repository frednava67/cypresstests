const strSiteURL = 'https://www.hulu.com/press';
const slctrFooterUL = '#page-44 > footer > nav > ul';
const slctrNav = '#page-44 > header > div.regular-menu > nav';

describe('Hulu Footer Existence Test', function() {

    beforeEach(function () {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Press Site')
    })

    it('Validatese Hulu Press Hulu Footer section', function() {
        cy.get(slctrFooterUL).contains('Hulu')
  
        cy.get(slctrFooterUL).contains('About Us')
        cy.get(slctrFooterUL).contains('Executives')
        cy.get(slctrFooterUL).contains('Subscribe Now')
    })
  
    it('Validatese Hulu Press Advertising Footer section', function() {
        cy.get(slctrFooterUL).contains('Advertising')
  
        cy.get(slctrFooterUL).contains('Ad Experience')
        cy.get(slctrFooterUL).contains('Brand Solutions')
        cy.get(slctrFooterUL).contains('Hulu Originals')
        cy.get(slctrFooterUL).contains('Description of Methodology (DOM)')
      })

    it('Validatese Hulu Press Jobs Footer section', function() {
      cy.get(slctrFooterUL).contains('Jobs')

      cy.get(slctrFooterUL).contains('Positions')
      cy.get(slctrFooterUL).contains('Hulugan Life')
      cy.get(slctrFooterUL).contains('What Defines Hulu')
      cy.get(slctrFooterUL).contains('Employee Verification')
    })

    it('Validatese Hulu Press Press Footer section', function() {
        cy.get(slctrFooterUL).contains('Press')
  
        cy.get(slctrFooterUL).contains('Originals')
        cy.get(slctrFooterUL).contains('News')
        cy.get(slctrFooterUL).contains('Schedule')
        cy.get(slctrFooterUL).contains('Press Site Terms')
      })
  
      it('Validatese Hulu Press Follow Us Footer section', function() {
        cy.get(slctrFooterUL).contains('Follow us')
  
        cy.get(slctrFooterUL).contains('Twitter')
        cy.get(slctrFooterUL).contains('Facebook')
        cy.get(slctrFooterUL).contains('Tumblr')
        cy.get(slctrFooterUL).contains('YouTube')
        cy.get(slctrFooterUL).contains('Instagram')
        cy.get(slctrFooterUL).contains('Google+')
  
      })
  
      it('Validatese Hulu Press Legal Footer section', function() {
        cy.get(slctrFooterUL).contains('Legal')
  
        cy.get(slctrFooterUL).contains('About Ads')
        cy.get(slctrFooterUL).contains('Hulu.com Terms')
        cy.get(slctrFooterUL).contains('Privacy Policy')
        cy.get(slctrFooterUL).contains('2017 Hulu')
  
      })
})