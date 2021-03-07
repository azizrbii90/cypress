/// <reference types="cypress" />


class LoginPage 
{

    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    fillEmail(value)
    {
        const filed=cy.get('[id=Email]')
        filed.clear()
        filed.type(value)
        return this
    }

    fillPassword(value)
    {
        const filed=cy.get('[id=Password]')
        filed.clear()
        filed.type(value)
        return this
    }

    submit()
    {
        const button=cy.get('[type=submit')
        button.click()
    }

}

export default LoginPage
