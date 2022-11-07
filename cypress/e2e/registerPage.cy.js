import RegisterPage from "../pageObjects/registerPage.js";

describe("Register page", () => {
  beforeEach(() => {
    cy.visit("signup");
  });

  it("displays register form", () => {
    cy.contains("Sign Up").should("have.text", "Sign Up");
  });
  it("displays validation message - blank inputs on sign up form", () => {
    RegisterPage.verifyRequiredRegisterDataValidationMessages();
  });
  it("displays login page after successfull register attempt", () => {
    cy.fixture("user-data.json").then(
      ({ newUser: { firstName, lastName, username, password } }) => {
        RegisterPage.fillSignUpFirstNameInput(firstName);
        RegisterPage.fillSignUpLastNameInput(lastName);
        RegisterPage.fillSignUpUsernameInput(username);
        RegisterPage.fillSignUpPasswordInput(password);
        RegisterPage.fillSignUpConfirmPasswordInput(password);
      }
    );
    RegisterPage.clickSignUpBtn();
    RegisterPage.verifySuccessfullRegisterAttempt();
  });
});
