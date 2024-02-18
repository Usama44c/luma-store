// signInPage.js
class SignInPage {
    visit() {
      cy.visit('/customer/account/login');
    }
  
    signIn(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
    }
  }
  
  export default SignInPage;
  