// createAccountPage.js
class CreateAccountPage {
    visit() {
      cy.visit('/create-account');
    }
  
    fillForm(name, email, password) {
      cy.get('#name').type(name);
      cy.get('#email').type(email);
      cy.get('#password').type(password);
    }
  
    submitForm() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default CreateAccountPage;
  