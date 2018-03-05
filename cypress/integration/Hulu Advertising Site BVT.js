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

describe('Advertising Site Home Page Element Presences Tests', function() {

    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    context('Verify Hero Masthead', function () {

        it('Verify Hero Masthead Section', function() {
            cy
            .get('#home-hero')
            .should('have.class', 'hero')
            .and('have.class', 'lg-header')
        })

        it('Verify Left Button', function() {
            cy
            .get('#home-hero > div > button:first')
            .should('have.class', 'slick-prev')
            .and('have.class', 'slick-arrow')
        })

        it('Verify Right Button', function() {
            cy
            .get('#home-hero > div > button:nth-of-type(2)')
            .should('have.class', 'slick-next')
            .and('have.class', 'slick-arrow')
        })

        it('Verify Tracker Dots', function() {
            cy
            .get('#home-hero > div > ul')
            .should('have.class', 'slick-dots')
        })
    })

    context('Verify Why Hulu Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#why-hulu')
            .should('have.class', 'section')
        })

        it('Verify eyebrow', function() {
            cy
            .get('#why-hulu > div > div > div > div > div > div > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
        })

        it('Verify Learn More', function() {
            cy
            .get('#why-hulu > div > div > div > div > div > div > a')
            .should('have.class', 'btn')
            .and('have.class', 'btn-primary')                            
            .and('have.attr','href')
            .and('equal','https://www.hulu.com/advertising/insights/')

            cy
            .get('#why-hulu > div > div > div > div > div > div > a')
            .contains('Learn More')
        })    
    })

    context('Verify Value Props Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#value-props-1')
            .should('have.class', 'section')
            .and('have.class','value-props')
        })

        it('Verify three sub items', function() {
            cy
            .get('#value-props-1 > div > div > div:nth-child(1)')
            .should('have.class', 'col-xs-4')
            .within(() => {
                cy.get('h3').then(($hdr) => {
                    cy.expect($hdr.text()).to.contain('Younger & More Engaged Audience')
                })
            })

            cy
            .get('#value-props-1 > div > div > div:nth-child(2)')
            .should('have.class', 'col-xs-4')
            .within(() => {
                cy.get('h3').then(($hdr) => {
                    cy.expect($hdr.text()).to.contain('Personalized & Precise Targeting')
                })
            })


            cy
            .get('#value-props-1 > div > div > div:nth-child(3)')
            .should('have.class', 'col-xs-4')
            .within(() => {
                cy.get('h3').then(($hdr) => {
                    cy.expect($hdr.text()).to.contain('Clutter Free & Premium Experience')
                })
            })
        })
    })

    context('Verify Brand Solutions Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#brand-solutions')
            .should('have.class', 'section')
        })

        it('Verify eyebrow', function() {
            cy
            .get('#brand-solutions > div > div > div > div > div > div > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
        })

        it('Verify Learn More', function() {
            cy
            .get('#brand-solutions > div > div > div > div > div > div > a')
            .should('have.class', 'btn')
            .and('have.class', 'btn-primary')                            
            .and('have.attr','href')
            .and('equal','https://www.hulu.com/advertising/brand-solutions/')

            cy
            .get('#brand-solutions > div > div > div > div > div > div > a')
            .contains('Learn More')
        })    
    })

    context('Verify Ad Experience Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#ad-experience')
            .should('have.class', 'section')
        })

        it('Verify eyebrow', function() {
            cy
            .get('#ad-experience > div > div:nth-child(1) > div.col-xs-12.col-sm-8 > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
        })

        it('Verify Learn More', function() {
            cy
            .get('#ad-experience > div > div:nth-child(1) > div.col-xs-12.col-sm-4.cta-c > a')
            .should('have.class', 'btn')
            .and('have.class', 'btn-primary')                            
            .and('have.text','Learn More')
            .and('have.attr','href')
            .and('equal','https://www.hulu.com/advertising/ad-experiences/')
        })

        it('Verify Awareness Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.first')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'even')
            .and('have.class', 'first')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.first > div > a')
            .contains('Awareness')
        })

        it('Verify Engagement Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.odd')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'odd')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.odd > div > a')
            .contains('Engagement')
        })

        it('Verify Action Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.third')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'even')
            .and('have.class', 'third')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.third > div > a')
            .contains('Action')
        })


    })

    context('Verify Hulu Originals Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#hulu-originals')
            .should('have.class', 'section')
        })

        it('Verify eyebrow', function() {
            cy
            .get('#hulu-originals > div > div > div > div > div > div > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
        })

        it('Verify Learn More', function() {
            cy
            .get('#hulu-originals > div > div > div > div > div > div > a')
            .should('have.class', 'btn')
            .and('have.class', 'btn-primary')                            
            .and('have.attr','href')
            .and('equal','https://www.hulu.com/advertising/hulu-originals/')

            cy
            .get('#hulu-originals > div > div > div > div > div > div > a')
            .contains('Learn More')
        })    
    })

    context('Verify Case Studies Section', function () {

        it('Verify top-level Section', function() {
            cy
            .get('#content-wrap > div > div > main > section:nth-child(8)')
            .should('have.class', 'section')
            .within(() => {
                cy.get('div > div:nth-child(1) > div.col-xs-12.col-sm-8 > div')
                .should('have.text', 'Case Studies')
            })

        })

        it('Verify eyebrow', function() {
            cy
            .get('#content-wrap > div > div > main > section:nth-child(8) > div > div:nth-child(1) > div.col-xs-12.col-sm-8 > div')
            .should('have.class', 'eyebrow')
            .and('have.class', 'small')
            .and('have.text', 'Case Studies')
        })

        it('Verify Case Studies', function() {
            cy
            .get('#ad-experience > div > div:nth-child(1) > div.col-xs-12.col-sm-4.cta-c > a')
            .should('have.class', 'btn')
            .and('have.class', 'btn-primary')                            
            .and('have.attr','href')
            .and('equal','https://www.hulu.com/advertising/ad-experiences/')

            cy
            .get('#ad-experience > div > div:nth-child(1) > div.col-xs-12.col-sm-4.cta-c > a')
            .contains('Learn More')
        })

        it('Verify Awareness Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.first')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'even')
            .and('have.class', 'first')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.first > div > a')
            .contains('Awareness')
        })

        it('Verify Engagement Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.odd')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'odd')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.odd > div > a')
            .contains('Engagement')
        })

        it('Verify Action Tile existence', function() {
            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.third')
            .should('have.class', 'tile')
            .and('have.class', 'title-only')
            .and('have.class', 'even')
            .and('have.class', 'third')

            cy
            .get('#ad-experience > div > div.row.tile-c > div.tile.title-only.even.third > div > a')
            .contains('Action')
        })


    })



    context('Advertising Site Home Page Element Interaction Tests', function() {

        it('Opens the Hulu Insights area via clicking the Learn More Button', function() {
            cy
            .get('#why-hulu > div > div > div > div > div > div > a')
            .click()
            .title().should('include', 'Hulu Insights – Hulu Advertising')
        })

        it('Opens the Brand Solutions area via clicking the Learn More Button', function() {
            cy
            .get('#brand-solutions > div > div > div > div > div > div > a')
            .click()
            .title().should('include', 'Brand Solutions – Hulu Advertising')
        })

        it('Opens the Ad Experience area via clicking the Learn More Button', function() {
            cy
            .get('#ad-experience > div > div:nth-child(1) > div.col-xs-12.col-sm-4.cta-c > a')
            .click()
            .title().should('include', 'Ad Experience – Hulu Advertising')
        })

        it('Opens the Hulu Originals area via clicking the Learn More Button', function() {
            cy
            .get('#hulu-originals > div > div > div > div > div > div > a')
            .click()
            .title().should('include', 'Hulu Originals – Hulu Advertising')
        })

    })
})
