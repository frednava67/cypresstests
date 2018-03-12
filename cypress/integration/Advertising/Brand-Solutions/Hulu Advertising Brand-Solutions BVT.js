const strSiteURL = 'https://www.hulu.com/advertising/brand-solutions/';
const slctrFooterUL = '#footer_nav > div';


describe('Advertising Brand-Solutions Tests', function() {

    it('Opens the Brand-Solutions area', function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Brand Solutions – Hulu Advertising')
    })

})

describe('Advertising Brand-Solutions Site Home Page Element Presences Tests', function() {

    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    context('Verify Masthead', function () {

        it('Verify Masthead Section', function() {
            cy
            .get('#brand-solutions-header')
            .should('have.class', 'grey-border')
            .and('have.class', 'lg-header')
        })
    })

    context('Verify Reach Section', function () {

        it('Verify Section Anchor', function() {
            cy
            .get('#content-wrap > div > div > main > div:nth-child(2)')
            .within(() => {
                cy.get('#reach-section').then(($div) => {
                    cy.expect($div).to.have.class('section-anchor')
                })
            })

            cy
            .get('#scroll-trigger > div.row.sec-heading.group-reach > div > h2')
            .should('have.class', 'sec-title')
            .and('have.text', 'Reach')
        })
    })

    context('Verify Seasonal Section', function () {

        it('Verify Section Anchor', function() {
            cy
            .get('#content-wrap > div > div > main > div:nth-child(6)')
            .within(() => {
                cy.get('#seasonal-section').then(($div) => {
                    cy.expect($div).to.have.class('section-anchor')
                })
            })

            cy
            .get('#scroll-trigger > div.row.sec-heading.group-seasonal > div > h2')
            .should('have.class', 'sec-title')
            .and('have.text', 'Seasonal')
        })
    })

    context('Verify Custom Opportunities Section', function () {

        it('Verify Section Anchor', function() {
            cy
            .get('#content-wrap > div > div > main > div:nth-child(10)')
            .within(() => {
                cy.get('#custom-opportunities-section').then(($div) => {
                    cy.expect($div).to.have.class('section-anchor')
                })
            })

            cy
            .get('#scroll-trigger > div.row.sec-heading.group-action > div > h2')
            .should('have.class', 'sec-title')
            .and('have.text', 'Custom Opportunities')
        })
    })

    context('Verify Get In Touch Section', function () {

        it('Verify eyebrow', function() {
            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-4.col-xs-12 > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
            .and('have.text', 'Contact')
        })

        it('Verify form elements', function() {

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(1) > div > input').then(($txt) => {
                    cy.expect($txt).to.have.attr('name','contact_name')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(2) > div > input').then(($txt) => {
                    cy.expect($txt).to.have.attr('name','contact_email')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(3) > div > input').then(($txt) => {
                    cy.expect($txt).to.have.attr('name','contact_company')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(4) > div > input').then(($txt) => {
                    cy.expect($txt).to.have.attr('name','contact_city')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(5) > div > select').then(($slct) => {
                    cy.expect($slct).to.have.attr('name','contact_state')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(1) > div:nth-child(4) > div > input').then(($txt) => {
                    cy.expect($txt).to.have.attr('name','contact_city')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(2) > div > div.form-group.gfe.content_error > textarea').then(($txtarea) => {
                    cy.expect($txtarea).to.have.attr('name','contact_message')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('div:nth-child(2) > div > div.form-group.contact-interest.gfe.interest_error > span.interest_message').then(($grp) => {
                    cy.expect($grp).to.have.class('interest_message')
                })
            })

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div > div:nth-child(3) > div > div > div')
            .should('have.class', 'g-recaptcha')
            .and('have.class', 'gfe')
            .and('have.class', 'human_check_error')

            cy
            .get('#content-wrap > div > div > main > div.get-in-touch > div > div > div.col-sm-8.col-xs-12 > form > div > div:nth-child(4) > div > div')
            .should('have.class', 'form-group')
            .within(() => {
                cy.get('input').then(($btn) => {
                    cy.expect($btn).to.have.attr('type','submit')
                    cy.expect($btn).to.have.class('btn')
                    cy.expect($btn).to.have.class('btn-primary')
                })
            })
        })
    })
})


describe('Hulu Footer Existence Test', function() {

    beforeEach(function () {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    it('Validates Hulu Advertising Hulu Footer section', function() {
        cy.get(slctrFooterUL).contains('Hulu')
  
        cy.get(slctrFooterUL).contains('About Us')
        cy.get(slctrFooterUL).contains('Executives')
        cy.get(slctrFooterUL).contains('Subscribe Now')
    })
  
    it('Validates Hulu Advertising Advertising Footer section', function() {
        cy.get(slctrFooterUL).contains('Advertising')
  
        cy.get(slctrFooterUL).contains('Ad Experience')
        cy.get(slctrFooterUL).contains('Brand Solutions')
        cy.get(slctrFooterUL).contains('Hulu Originals')
        cy.get(slctrFooterUL).contains('Description of Methodology (DOM)')
    })

    it('Validates Hulu Advertising Jobs Footer section', function() {
      cy.get(slctrFooterUL).contains('Jobs')

      cy.get(slctrFooterUL).contains('Positions')
      cy.get(slctrFooterUL).contains('Hulugan Life')
      cy.get(slctrFooterUL).contains('What Defines Hulu')
      cy.get(slctrFooterUL).contains('Employee Verification')
    })

    it('Validates Hulu Advertising Press Footer section', function() {
        cy.get(slctrFooterUL).contains('Press')
  
        cy.get(slctrFooterUL).contains('Originals')
        cy.get(slctrFooterUL).contains('News')
        cy.get(slctrFooterUL).contains('Schedule')
        cy.get(slctrFooterUL).contains('Press Site Terms')
    })
  
      it('Validates Hulu Advertising Follow Us Footer section', function() {
        cy.get(slctrFooterUL).contains('Follow Us')
  
        cy.get(slctrFooterUL).contains('Twitter')
        cy.get(slctrFooterUL).contains('Facebook')
        cy.get(slctrFooterUL).contains('Tumblr')
        cy.get(slctrFooterUL).contains('YouTube')
        cy.get(slctrFooterUL).contains('Instagram')
        cy.get(slctrFooterUL).contains('Google+')
  
    })
  
    it('Validates Hulu Advertising Legal Footer section', function() {
        cy.get(slctrFooterUL).contains('Legal')

        cy.get(slctrFooterUL).contains('About Ads')
        cy.get(slctrFooterUL).contains('Hulu.com Terms')
        cy.get(slctrFooterUL).contains('Privacy Policy')
        cy.get(slctrFooterUL).contains('2017 Hulu')
    })
})

