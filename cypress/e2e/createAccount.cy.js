// createAccount.spec.js
import CreateAccountPage from '../pages/createAccountPage';

describe('Create Account', () => {
  const createAccountPage = new CreateAccountPage();

  beforeEach(() => {
    createAccountPage.visit();
  });

  it('should create an account with valid details', () => {
    createAccountPage.fillForm('John Doe', 'john@example.com', 'password123');
    createAccountPage.submitForm();
    cy.url().should('include', '/dashboard');
  });

  it('should display error message for incomplete form submission', () => {
    createAccountPage.submitForm();
    cy.contains('Please fill in all fields').should('be.visible');
  });
});
