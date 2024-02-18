// cartPage.js
class CartPage {
    visit() {
      cy.visit('/cart');
    }
  
    checkout() {
      cy.get('#checkout-button').click();
    }
  }
  
  export default CartPage;
  