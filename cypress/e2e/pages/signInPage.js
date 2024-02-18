// signInPage.js
class SignInPage {
    visit() {
      cy.visit('/signin');
    }
  
    signIn(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default SignInPage;
  