// checkoutPage.js
class CheckoutPage {
    visit() {
      cy.visit('/checkout');
    }
  
    fillShippingInfo(name, address, city, zip) {
      cy.get('#name').type(name);
      cy.get('#address').type(address);
      cy.get('#city').type(city);
      cy.get('#zip').type(zip);
    }
  
    placeOrder() {
      cy.get('#place-order-button').click();
    }
  }
  
  export default CheckoutPage;
  