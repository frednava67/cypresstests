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

describe('Hulu Footer Click Navigation Tests', function() {

  context('Hulu Section', function () {

    beforeEach(function () {
      cy.visit(strSiteURL)
      cy.title().should('include', 'Hulu Press Site')
    })

    // Click 'About Us' item
    //
    it('Validates the Hulu Press About Us Footer item in the Hulu section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('About Us')
        .click()
        .title()
        .should('include','About Hulu – Hulu Press Site')
    })

    // Click 'Executives' item
    //
    it('Validates the Hulu Press Executives Footer item in the Hulu section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Executives')
        .click()
        .title()
        .should('include','Executive Team – Hulu Press Site')
    })

    // Click 'Subscribe Now' item
    //
    it('Validates the Hulu Press Subscribe Now Footer item in the Hulu section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Subscribe Now')
        .click()
        .title()
        .should('include','TV Shows and Movies - Watch Your Favorite TV Episodes and Movies Online | Hulu')
    })
  })

  context('Advertising Section', function () {

    beforeEach(function () {
      cy.visit(strSiteURL)
      cy.title().should('include', 'Hulu Press Site')
    })

    // Click 'Ad Experience' item
    //
    it('Validates the Hulu Press Ad Experience Footer item in the Advertising section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Ad Experience')
        .click()
        .title()
        .should('include','Hulu Advertising')
    })

    // Click 'Brand Solutions' item
    //
    it('Validates the Hulu Press Brand Solutions Footer item in the Advertising section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Brand Solutions')
        .click()
        .title()
        .should('include','Brand Solutions – Hulu Advertising')
    })

    // Click 'Hulu Originals' item
    //
    it('Validates the Hulu Press Hulu Originals Footer item in the Advertising section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Hulu Originals')
        .click()
        .title()
        .should('include','Hulu Originals – Hulu Advertising')
    })
    
    // Click 'Description of Methodology (DOM)' item
    //
    it('Validates the Hulu Press Description of Methodology Footer item in the Advertising section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Description of Methodology')
        .click('top')
        .title()
        .should('include','Description of Methodology (DOM) – Hulu Advertising')
    })



  })

  context.only('Jobs Section', function () {

    beforeEach(function () {
      cy.visit(strSiteURL)
      cy.title().should('include', 'Hulu Press Site')
    })

    // Click 'Positions' item
    //
    it('Validates the Hulu Press Positions Footer item in the Jobs section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Positions')
        .click()
        .title()
        .should('include','Hulu Jobs')
    })

    // Click 'Hulugan Life' item
    //
    it('Validates the Hulu Press Hulugan Life Footer item in the Jobs section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('Hulugan Life')
        .click()
        .title()
        .should('include','Hulu Jobs')
    })

    // Click 'What Defines Hulu' item
    //
    it('Validates the Hulu Press What Defines Hulu Footer item in the Jobs section activation/navigation', function() {
      cy
        .get(slctrFooterUL)
        .contains('What Defines Hulu')
        .click()
        .title()
        .should('include','Hulu Jobs')
    })
    
    // // Click 'Employee Verification' item
    // //
    // it('Validates the Hulu Press Employee Verification Footer item in the Jobs section activation/navigation', function() {
    //   cy
    //     .get(slctrFooterUL)
    //     .contains('Employee Verification')
    //     .click('top')
    //     .title()
    //     .should('include','Description of Methodology (DOM) – Hulu Advertising')
    // })

  })

})
