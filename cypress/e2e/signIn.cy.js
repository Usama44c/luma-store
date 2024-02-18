// signIn.spec.js
import SignInPage from '../pages/signInPage';

describe('Sign In', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    signInPage.visit();
  });

  it('should sign in with valid credentials', () => {
    signInPage.signIn('username', 'password');
    cy.url().should('include', '/dashboard');
  });

  it('should display error message for invalid credentials', () => {
    signInPage.signIn('invalidusername', 'invalidpassword');
    cy.contains('Invalid username or password').should('be.visible');
  });
});
