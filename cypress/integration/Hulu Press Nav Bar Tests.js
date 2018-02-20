const strSiteURL = 'https://www.hulu.com/press';
const slctrNav = '#page-44 > header > div.regular-menu > nav';
const slctrUL = '#page-44 > header > div.regular-menu > nav > ul';
const slctrLoginModal = '#page-1171 > div:nth-child(15) > div';
const slctrScreeningRoomModal = '#page-1171 > div:nth-child(17) > div';

describe('Top Nav Existence Test', function() {

  beforeEach(function () {
    cy.visit(strSiteURL)
    cy.title().should('include', 'Hulu Press Site')
  })

  it('Validates the Hulu Press Nav Area top-level items', function() {
    cy.get(slctrNav).contains('News')
    cy.get(slctrNav).contains('Schedule')
    cy.get(slctrNav).contains('Hulu Originals')
    cy.get(slctrNav).contains('New Exclusives')
    cy.get(slctrNav).contains('Corporate')
    cy.get(slctrNav).contains('Contact')
    cy.get(slctrNav).contains('Screening Room')
  })
})


describe('Nav top-level item click navigation Tests', function() {

  context('News', function () {

    beforeEach(function () {
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
        .should('include','Press Releases – Hulu Press Site')
    })
  })

  context('Schedule', function () {

    beforeEach(function () {
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
        .should('include','Originals Premiere Dates – Hulu Press Site')
    })
  })

  context('Hulu Originals', function () {

    beforeEach(function () {
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
        .should('include','Hulu Originals – Hulu Press Site')
    })
  })

  context('New Exclusives', function () {

    beforeEach(function () {
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
        .should('include','New Exclusives – Hulu Press Site')
    })
  })

  context('Corporate', function () {

    beforeEach(function () {
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
        .should('include','About Hulu – Hulu Press Site')
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



