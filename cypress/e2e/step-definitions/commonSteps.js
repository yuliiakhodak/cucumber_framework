const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const TGHtmlElementsPage = require('../../pages/TGHtmlElementsPage')
const DynamicTablesPage = require('../../pages/DynamicTablesPage')
const dynamicTablesPage = new DynamicTablesPage()
const tgHtmlElementsPage = new TGHtmlElementsPage()

Given('user navigates to {string}', (url) => {
    cy.visit(url)
})

Then('user should see the {string} page heading', (headingText) => {
    switch (headingText) {
        case 'Html Elements':
            tgHtmlElementsPage.getHeading().should('have.text', headingText)
            break
        case 'Project - Dynamic Tables':
            dynamicTablesPage.getHeading().should('have.text', headingText)
    }
})

When('user click on the {string} button', (button) => {
    switch (button) {
        case 'Register':
        case 'Sign in':
            tgHtmlElementsPage.clickButtonByText(button)
            break
        case 'ADD PRODUCT':
            dynamicTablesPage.getAddProductButton().click()
            break
        case 'CLOSE':
            dynamicTablesPage.getDeleteButton().click()
            break  
    }
})
