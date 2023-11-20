const DynamicTablesPage = require('../../../pages/DynamicTablesPage')
const { Then } = require('@badeball/cypress-cucumber-preprocessor')
const dynamicTablesPage = new DynamicTablesPage()


Then(/^user should see Add New Product pop-up$/, () => {
	dynamicTablesPage.getNewPopUp().should('be.visible')
})

Then(/^user should not see Add New Product pop-up$/, () => {
dynamicTablesPage.getNewPopUp().should('not.exist')
})


