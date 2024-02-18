// productListing.spec.js
import ProductListingPage from '../pages/productListingPage';

describe('Product Listing', () => {
  const productListingPage = new ProductListingPage();

  beforeEach(() => {
    productListingPage.visit();
  });

  it('should add a product to the cart', () => {
    productListingPage.addProductToCart('Product A');
    cy.contains('Product A added to cart').should('be.visible');
  });
});
