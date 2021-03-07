/// <reference types="cypress" />

import LoginPage from '../Pageobjects/LoginPage'
describe('test Suite', function(){

    it('Valid login test', function() {

        const lp= new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })


})