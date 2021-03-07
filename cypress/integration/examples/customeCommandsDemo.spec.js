/// <reference types="cypress" />


describe('CustomSuite', function() {

    it('LoginTest', function(){

        cy.login('admin@yourstore.com','admin') //valid
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin123') //invalid
        cy.title().should('be.equal','Your store. Login')
    })

    it('Add customer', function(){

        //login
        cy.login('admin@yourstore.com','admin')

        //add
        cy.log('adding customer')
    })

    it('Edit customer', function(){

        //login
        cy.login('admin@yourstore.com','admin')

        //edit
        cy.log('editing customer')
    })

})