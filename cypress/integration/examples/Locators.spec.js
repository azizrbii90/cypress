/// <reference types="cypress" />

describe('Locating Elements', function()
{
    it('Verify types of locators', function()
    {
        cy.visit('https://demo.nopcommerce.com/') // open url

        cy.get("#small-searchterms").type("Apple macbook Pro 13-inch") // Search box

        cy.get("[type='submit'").click() // click on search button

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

        cy.get("#product_enteredQuantity_4").clear().type('2')  // Quantity

        cy.wait(3000)

        cy.get("#add-to-cart-button-4").click() // Add to cart button after providing quantity

        cy.wait(5000)

        cy.get("#topcartlink > a > span.cart-label").click() // Shopping cart link

        cy.wait(3000)

        cy.get(".product-unit-price").contains('$1,800.00')  // validating point
    })
})