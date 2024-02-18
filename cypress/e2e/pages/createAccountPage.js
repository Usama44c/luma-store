// createAccountPage.js
class CreateAccountPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    fillForm(fname,lname, email, password,confirmpassword ) {
      cy.get('#firstname').type(fname);
      cy.get('#lastname').type(lname);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(confirmpassword);
    }
  
    submitForm() {
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    }
  }
  
  export default CreateAccountPage;
  