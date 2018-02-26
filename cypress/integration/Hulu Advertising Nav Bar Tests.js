const strSiteURL = 'https://www.hulu.com/advertising';
const slctrNav = '#menu-primary-navigation';
const slctrNavIconsUL ='#content-wrap > header > div > nav.nav-social.nav-collapse > ul > li'



describe.only('Top Nav Existence Test', function() {

    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    it('Validates the Hulu Advertising Nav Area top-level items', function() {
        cy.get(slctrNav).contains('Ad Experience')
        cy.get(slctrNav).contains('Brand Solutions')
        cy.get(slctrNav).contains('Case Studies')
        cy.get(slctrNav).contains('Hulu Insights')
        cy.get(slctrNav).contains('Hulu Originals')
    })

    it('Validates the Hulu Advertising Nav Area Social icon - Newsletter', function() {
        cy
        .get('#content-wrap > header > div > nav.nav-social.nav-collapse > ul > li > a.newsletter-open')
        .should('have.attr','href').should('equal','#newsletter')
    })
   
    it('Validates the Hulu Advertising Nav Area Social icon - Twitter', function() {
        cy
        .get('#content-wrap > header > div > nav.nav-social.nav-collapse > ul > li:nth-child(2) > a')
        .should('have.attr','href').should('equal','https://twitter.com/HuluInsights')
        
    })

    it('Validates the Hulu Advertising Nav Area Social icon - Get in touch', function() {
        cy
        .get('#content-wrap > header > div > nav.nav-social.nav-collapse > ul > li:nth-child(3) > a')
        .should('have.attr','href').should('equal','.get-in-touch')
        
    })



    

})





describe('Nav top-level item click navigation Tests', function() {
    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    // Click 'Ad Experience' item
    //
    it('Validates the Hulu Advertising Ad Experience nav item activation/navigation', function() {
        cy
            .get(slctrNav)
            .contains('Ad Experience')
            .click()
            .title()
            .should('include', 'Ad Experience – Hulu Advertising')
    })

    // Click 'Brand Solutions' item
    //
    it('Validates the Hulu Advertising Brand Solutions nav item activation/navigation', function() {
        cy
            .get(slctrNav)
            .contains('Brand Solutions')
            .click()
            .title()
            .should('include', 'Brand Solutions – Hulu Advertising')
    })

    // Click 'Case Studies' item
    //
    it('Validates the Hulu Advertising Case Studies nav item activation/navigation', function() {
        cy
            .get(slctrNav)
            .contains('Case Studies')
            .click()
            .title()
            .should('include', 'Case Studies – Hulu Advertising')
    })

    // Click 'Ad Experience' item
    //
    it('Validates the Hulu Advertising Hulu Insights nav item activation/navigation', function() {
        cy
            .get(slctrNav)
            .contains('Hulu Insights')
            .click()
            .title()
            .should('include', 'Hulu Insights – Hulu Advertising')
    })

    // Click 'Ad Experience' item
    //
    it('Validates the Hulu Advertising Hulu Originals nav item activation/navigation', function() {
        cy
            .get(slctrNav)
            .contains('Hulu Originals')
            .click()
            .title()
            .should('include', 'Hulu Originals – Hulu Advertising')
    })
})