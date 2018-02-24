const strSiteURL = 'https://www.hulu.com/advertising';
const slctrNav = '#menu-primary-navigation';
const slctrUL = '#page-44 > header > div.regular-menu > nav > ul';
const slctrNewsUL = '#menu-item-2337';
const slctrLoginModal = '#page-1171 > div:nth-child(15) > div';
const slctrScreeningRoomModal = '#page-1171 > div:nth-child(17) > div';

describe('Top Nav Existence Test', function() {

    beforeEach(function() {
        cy.visit(strSiteURL)
        cy.title().should('include', 'Hulu Advertising')
    })

    it.only('Validates the Hulu Advertising Nav Area top-level items', function() {
        cy.get(slctrNav).contains('Ad Experience')
        cy.get(slctrNav).contains('Brand Solutions')
        cy.get(slctrNav).contains('Case Studies')
        cy.get(slctrNav).contains('Hulu Insights')
        cy.get(slctrNav).contains('Hulu Originals')
    })
})


describe('Nav top-level item click navigation Tests', function() {

    context('News', function() {

        beforeEach(function() {
            cy.visit(strSiteURL)
            cy.title().should('include', 'Hulu Press Site')
        })

        // Click 'News' item
        //
        it('Validates the Hulu Press News nav item activation/navigation', function() {
            cy
                .get(slctrUL)
                .contains('News')
                .click()
                .title()
                .should('include', 'Press Releases – Hulu Press Site')
        })

        it('Validate click on a News sub-menu item - Press Releases', () => {
            cy.get('#menu-item-2337 ul:first').then($el => {
                cy.wrap($el).invoke('show')
                cy.wrap($el).contains('Press Releases').click()
                    .title()
                    .should('include', 'Press Releases – Hulu Press Site')
            })
        })

        it('Validate click on a News sub-menu item - Hulu Updates', () => {
            cy.get('#menu-item-2337 ul:first').then($el => {
                cy.wrap($el).invoke('show')
                cy.wrap($el).contains('Hulu Updates').click()
                    .title()
                    .should('include', 'Hulu Updates – Hulu Press Site')
            })
        })

        // it('Validate click on a News sub-menu item - Tech Blog', ()=>{
        //   cy.get('#menu-item-2337 ul:first').then($el=>{
        //     cy.wrap($el).invoke('show')
        //     cy.wrap($el).contains('Tech Blog').click()
        //     .title()
        //     .should('include','Hulu Tech blog – Medium')
        //   })
        // })

        context('Schedule', function() {

            beforeEach(function() {
                cy.visit(strSiteURL)
                cy.title().should('include', 'Hulu Press Site')
            })

            // Click 'Schedule' item
            //
            it('Validates the Hulu Press Schedule nav item activation/navigation', function() {
                cy
                    .get(slctrUL)
                    .contains('Schedule')
                    .click()
                    .title()
                    .should('include', 'Originals Premiere Dates – Hulu Press Site')
            })

            it('Validate click on a News sub-menu item - Originals Premiere Dates', () => {
                cy.get('#menu-item-2338 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Originals Premiere Dates').click()
                        .title()
                        .should('include', 'Originals Premiere Dates – Hulu Press Site')
                })
            })

            it('Validate click on a News sub-menu item - This Week On', () => {
                cy.get('#menu-item-2338 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('This Week On').click()
                        .title()
                        .should('include', 'This Week On – Hulu Press Site')
                })
            })

            it('Validate click on a News sub-menu item - New This Month', () => {
                cy.get('#menu-item-2338 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('New This Month').click()
                        .title()
                        .should('include', 'New This Month – Hulu Press Site')
                })
            })
        })

        context('Hulu Originals', function() {

            beforeEach(function() {
                cy.visit(strSiteURL)
                cy.title().should('include', 'Hulu Press Site')
            })

            // Click 'Hulu Originals' item
            //
            it('Validates the Hulu Press Hulu Originals nav item activation/navigation', function() {
                cy
                    .get(slctrUL)
                    .contains('Hulu Originals')
                    .click()
                    .title()
                    .should('include', 'Hulu Originals – Hulu Press Site')
            })

            it('Validate click on a Hulu Originals sub-menu item - The Handmaid’s Tale', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('The Handmaid’s Tale').click()
                        .title()
                        .should('include', 'The Handmaid’s Tale – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - Future Man', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Future Man').click()
                        .title()
                        .should('include', 'Future Man – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - I Love You, America', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('I Love You, America').click()
                        .title()
                        .should('include', 'I Love You, America – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - Chance', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Chance').click()
                        .title()
                        .should('include', 'Chance – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - The Mindy Project', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('The Mindy Project').click()
                        .title()
                        .should('include', 'The Mindy Project – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - Difficult People', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Difficult People').click()
                        .title()
                        .should('include', 'Difficult People – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - Casual', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Casual').click()
                        .title()
                        .should('include', 'Casual – Hulu Press Site')
                })
            })

            it('Validate click on a Hulu Originals sub-menu item - View all', () => {
                cy.get('#menu-item-241 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('View all').click()
                        .title()
                        .should('include', 'Hulu Originals – Hulu Press Site')
                })
            })
        })

        context('New Exclusives', function() {

            beforeEach(function() {
                cy.visit(strSiteURL)
                cy.title().should('include', 'Hulu Press Site')
            })

            // Click 'New Exclusives' item
            //
            it('Validates the Hulu Press Hulu New Exclusives nav item activation/navigation', function() {
                cy
                    .get(slctrUL)
                    .contains('New Exclusives')
                    .click()
                    .title()
                    .should('include', 'New Exclusives – Hulu Press Site')
            })

            it('Validate click on a New Exclusives sub-menu item - There’s…Johnny!', () => {
                cy.get('#menu-item-5114 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('There’s…Johnny!').click()
                        .title()
                        .should('include', 'There’s…Johnny! – Hulu Press Site')
                })
            })

            it('Validate click on a New Exclusives sub-menu item - GameFace', () => {
                cy.get('#menu-item-5114 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('GameFace').click()
                        .title()
                        .should('include', 'GameFace – Hulu Press Site')
                })
            })

            it('Validate click on a New Exclusives sub-menu item - Top of the Lake: China Girl', () => {
                cy.get('#menu-item-5114 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Top of the Lake: China Girl').click()
                        .title()
                        .should('include', 'Top of the Lake: China Girl – Hulu Press Site')
                })
            })

            it('Validate click on a New Exclusives sub-menu item - TGIH', () => {
                cy.get('#menu-item-5114 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('TGIH').click()
                        .title()
                        .should('include', 'TGIH – Hulu Press Site')
                })
            })

            it('Validate click on a New Exclusives sub-menu item - View All', () => {
                cy.get('#menu-item-5114 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('View All').click()
                        .title()
                        .should('include', 'New Exclusives – Hulu Press Site')
                })
            })
        })

        context('Corporate', function() {

            beforeEach(function() {
                cy.visit(strSiteURL)
                cy.title().should('include', 'Hulu Press Site')
            })

            // Click 'Corporate' item
            //
            it('Validates the Hulu Press Hulu Corporate nav item activation/navigation', function() {
                cy
                    .get(slctrUL)
                    .contains('Corporate')
                    .click()
                    .title()
                    .should('include', 'About Hulu – Hulu Press Site')
            })

            it('Validate click on a Corporate sub-menu item - About Hulu', () => {
                cy.get('#menu-item-1775 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('About Hulu').click()
                        .title()
                        .should('include', 'About Hulu – Hulu Press Site')
                })
            })

            it('Validate click on a Corporate sub-menu item - Executive Team', () => {
                cy.get('#menu-item-1775 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Executive Team').click()
                        .title()
                        .should('include', 'Executive Team – Hulu Press Site')
                })
            })

            it('Validate click on a Corporate sub-menu item - Brand Assets', () => {
                cy.get('#menu-item-1775 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Brand Assets').click()
                        .title()
                        .should('include', 'Brand Assets – Hulu Press Site')
                })
            })

            it('Validate click on a Corporate sub-menu item - Products Assets', () => {
                cy.get('#menu-item-1775 ul:first').then($el => {
                    cy.wrap($el).invoke('show')
                    cy.wrap($el).contains('Products Assets').click()
                        .title()
                        .should('include', 'Products Assets – Hulu Press Site')
                })
            })












        })

        // context('Contact', function () {

        //   beforeEach(function () {
        //     cy.visit(strSiteURL)
        //     cy.title().should('include', 'Hulu Press Site')
        //   })

        //   // Click 'Contact' item
        //   //
        //   it('Validates the Hulu Press Hulu Contact nav item activation/navigation', function() {
        //     cy
        //       .get(slctrUL)
        //       .contains('Contact')
        //       .click()
        //       .wait(1000)
        //       .find(slctrLoginModal)
        //       .should('have.class','login-modal')
        //   })
        // })

        // context('Screening Room', function () {

        //   beforeEach(function () {
        //     cy.visit(strSiteURL)
        //     cy.title().should('include', 'Hulu Press Site')
        //   })

        //   // Click 'Screening Room' item
        //   //
        //   it('Validates the Hulu Press Hulu Screening Room nav item activation/navigation', function() {
        //     cy
        //       .get(slctrUL)
        //       .contains('Screening Room')
        //       .click()
        //       .wait(1000)
        //       .find(slctrScreeningRoomModal)
        //       .should('have.class','screening-room-modal')
        //   })
        //})
    })
})