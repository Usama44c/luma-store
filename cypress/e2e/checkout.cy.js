// checkout.spec.js
import CheckoutPage from '../pages/checkoutPage';

describe('Checkout', () => {
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    checkoutPage.visit();
  });

  it('should fill shipping information and place order', () => {
    checkoutPage.fillShippingInfo('John Doe', '123 Street', 'City', '12345');
    checkoutPage.placeOrder();
    cy.contains('Order placed successfully').should('be.visible');
  });
});
