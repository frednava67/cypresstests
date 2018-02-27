const strSiteURL = 'https://www.hulu.com/advertising';

describe('Advertising Site URL Launch Tests', function() {

    it('Visits the Hulu Advertising area', function() {
        cy.visit('https://www.hulu.com/advertising/')
        cy.title().should('include', 'Hulu Advertising')
    })

    it('Opens the Ad Experience area', function() {
        cy.visit('https://www.hulu.com/advertising/ad-experiences/')
        cy.title().should('include', 'Ad Experience – Hulu Advertising')
    })

    it('Opens the Brand Solutions area', function() {
        cy.visit('https://www.hulu.com/advertising/brand-solutions/')
        cy.title().should('include', 'Brand Solutions – Hulu Advertising')
    })

    it('Opens the Case Studies area', function() {
        cy.visit('https://www.hulu.com/advertising/case-studies/')
        cy.title().should('include', 'Case Studies – Hulu Advertising')
    })

    it('Opens the Hulu Insights area', function() {
        cy.visit('https://www.hulu.com/advertising/insights/')
        cy.title().should('include', 'Hulu Insights – Hulu Advertising')
    })

    it('Opens the Hulu Originals area', function() {
        cy.visit('https://www.hulu.com/advertising/hulu-originals/')
        cy.title().should('include', 'Hulu Originals – Hulu Advertising')
    })

})

describe.only('Advertising Site Home Page Element Presences Tests', function() {

    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    context('Verify Hero Masthead', function () {

        it('Verify Hero Masthead Section', function() {
            cy
            .get('#home-hero')
            .should('have.class', 'hero')
            .should('have.class', 'lg-header')
        })

        it('Verify Left Button', function() {
            cy
            .get('#home-hero > div > button:first')
            .should('have.class', 'slick-prev')
            .should('have.class', 'slick-arrow')
        })

        it('Verify Right Button', function() {
            cy
            .get('#home-hero > div > button:nth-of-type(2)')
            .should('have.class', 'slick-next')
            .should('have.class', 'slick-arrow')
        })

        it('Verify Tracker Dots', function() {
            cy
            .get('#home-hero > div > ul')
            .should('have.class', 'slick-dots')
        })
    })
})




