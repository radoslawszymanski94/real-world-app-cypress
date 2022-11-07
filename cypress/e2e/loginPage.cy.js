import LoginPage from "../pageObjects/loginPage.js";

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("signin");
  });

  it("displays login form", () => {
    cy.contains("Sign In").should("have.text", "Sign In");
  });
  it("displays validation message - blank inputs on sign in form", () => {
    LoginPage.verifyRequiredLoginDataValidationMessage("Username ");
  });
  it("displays validation message - inputs filled with wrong login data", () => {
    cy.loginUI("invalidUser");
    LoginPage.verifyInvalidLoginValidationMessage();
  });
  it("displays home page after successfull login attempt", () => {
    cy.loginUI("validUser");
    LoginPage.clickSignInBtn();
    LoginPage.verifySuccessfullLoginAttempt();
  });
});
