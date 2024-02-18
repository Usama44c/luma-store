// createAccount.spec.js
import CreateAccountPage from './pages/createAccountPage';

describe('Create Account', () => {
  const createAccountPage = new CreateAccountPage();

  beforeEach(() => {
    createAccountPage.visit();
  });

  it('should create an account with valid details', () => {
    createAccountPage.fillForm('John', 'Doe', 'john2@g.com', 'Password.@123' ,'Password.@123');
    createAccountPage.submitForm();
    cy.url().should('include', '/customer/account/');
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');

  });

  it('should display error message for incomplete form submission', () => {
    createAccountPage.submitForm();
    cy.contains('This is a required field.').should('be.visible');
  });
});
