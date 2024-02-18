// productListingPage.js
class ProductListingPage {
    visit() {
      cy.visit('/products');
    }
  
    addProductToCart(productName) {
      cy.contains(productName).parent().find('button').click();
    }
  }
  
  export default ProductListingPage;
  