describe('Advertising Site Launch Test', function() {
    it('Visits the Hulu Advertising area', function() {
        cy.visit('https://www.hulu.com/advertising/')
        cy.title().should('include', 'Hulu Advertising')
    })
})

describe('Ad Experiences Launch Test', function() {
    it('Visits the Ad Experience area', function() {
        cy.visit('https://www.hulu.com/advertising/ad-experiences/')
        cy.title().should('include', 'Ad Experience – Hulu Advertising')
    })
})

describe('Brand Solutions Launch Test', function() {
    it('Visits the Brand Solutions area', function() {
        cy.visit('https://www.hulu.com/advertising/brand-solutions/')
        cy.title().should('include', 'Brand Solutions – Hulu Advertising')
    })
})

describe('Case Studies Launch Test', function() {
    it('Visits the Case Studies area', function() {
        cy.visit('https://www.hulu.com/advertising/case-studies/')
        cy.title().should('include', 'Case Studies – Hulu Advertising')
    })
})

describe('Hulu Insights Launch Test', function() {
    it('Visits the Hulu Insights area', function() {
        cy.visit('https://www.hulu.com/advertising/insights/')
        cy.title().should('include', 'Hulu Insights – Hulu Advertising')
    })
})

describe('Hulu Originals Launch Test', function() {
    it('Visits the Hulu Originals area', function() {
        cy.visit('https://www.hulu.com/advertising/hulu-originals/')
        cy.title().should('include', 'Hulu Originals – Hulu Advertising')
    })
})