// cart.spec.js
import CartPage from '../pages/cartPage';

describe('Cart', () => {
  const cartPage = new CartPage();

  beforeEach(() => {
    cartPage.visit();
  });

  it('should proceed to checkout from the cart', () => {
    cartPage.checkout();
    cy.url().should('include', '/checkout');
  });
});
