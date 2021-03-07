/// <reference types="cypress" />


describe('MyTestSuite', function()
{

    before(function() {
        cy.log('step block')
    })

    after(function() {
        cy.log('dom black')
    })

    beforeEach(function() {
        cy.log('login')
    })

    afterEach(function() {
        cy.log('logout')
    })

    it('searching', function()
    {
        cy.log('search test')
    })

    it('advanced searching', function()
    {
        cy.log('search test')
    })

    it('searching', function()
    {
        cy.log('advanced search test')
    })

    it('listing product', function()
    {
        cy.log('listing product test')
    })
})