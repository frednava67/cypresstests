describe('Press Site Launch Test', function() {
    it('Visits the Hulu Press area', function() {
      cy.visit('https://www.hulu.com/press')
      cy.title().should('include', 'Hulu Press Site')
    })
})

describe('Press Releases Launch Test', function() {
    it('Visits the Hulu Press Releases area', function() {
      cy.visit('https://www.hulu.com/press/press-releases/')
      cy.title().should('include', 'Press Releases – Hulu Press Site')
    })
})

describe('New This Month Launch Test', function() {
    it('Visits the Hulu New This Month area', function() {
      cy.visit('https://www.hulu.com/press/new-this-month/')
      cy.title().should('include', 'New This Month – Hulu Press Site')
    })
})

describe('Hulu Originals Launch Test', function() {
    it('Visits the Hulu Originals area', function() {
      cy.visit('https://www.hulu.com/press/hulu-originals/')
      cy.title().should('include', 'Hulu Originals – Hulu Press Site')
    })
})

describe('Product Assets Launch Test', function() {
    it('Visits the Hulu Press Releases area', function() {
      cy.visit('https://www.hulu.com/press/products-assets/')
      cy.title().should('include', 'Products Assets – Hulu Press Site')
    })
})

describe('Executives Launch Test', function() {
    it('Visits the Hulu Executives area', function() {
      cy.visit('https://www.hulu.com/press/executives/')
      cy.title().should('include', 'Executive Team – Hulu Press Site')
    })
})

describe('About Us Launch Test', function() {
    it('Visits the Hulu About Us area', function() {
      cy.visit('https://www.hulu.com/press/about/')
      cy.title().should('include', 'About Hulu – Hulu Press Site')
    })
})

describe('Terms Of Use Launch Test', function() {
    it('Visits the Hulu Terms Of Use area', function() {
      cy.visit('https://www.hulu.com/press/terms-of-use/')
      cy.title().should('include', 'Press Site Terms of Use – Hulu Press Site')
    })
})

describe('Brand Assets Launch Test', function() {
    it('Visits the Hulu Brand Assets area', function() {
      cy.visit('https://www.hulu.com/press/brand-assets/')
      cy.title().should('include', 'Brand Assets – Hulu Press Site')
    })
})



















