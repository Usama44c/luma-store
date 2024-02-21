// signIn.spec.js
import SignInPage from "./pages/signInPage";

describe('Sign In', () => {
  const signInPage = new SignInPage();

  beforeEach(() => {
    signInPage.visit();
  });

  it('should sign in with valid credentials', () => {
    cy.fixture('users').then((userData) => {
      signInPage.signIn(userData.validUser.email, userData.validUser.password);
    });
    cy.url().should('include', '/customer/account/');
    cy.contains('john2@g.com').should('be.visible');

  });
  

  it('should display error message for invalid credentials', () => {
    cy.fixture('users').then((userData) => {
      signInPage.signIn(userData.invalidUser.email, userData.invalidUser.password);
    });
    cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
  });
});
