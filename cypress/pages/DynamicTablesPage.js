const TGBasePage = require('./TGBasePage')

class DynamicTablesPage extends TGBasePage {
   getHeading(){
    return cy.get('#main_heading')
   }
   getAddProductButton(){
      return cy.get('#add_product_btn')
   }
   getNewPopUp(){
      return cy.get('.modal-card')
   }
   getDeleteButton(){
      return cy.get('.delete')
   }
}

module.exports = DynamicTablesPage