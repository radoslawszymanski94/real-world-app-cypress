class LoginPage {
  get signInPageTitle() {
    return cy.get("h1").contains("Sign in");
  }

  get FormUsername() {
    return cy.get("#username");
  }

  get FormPassword() {
    return cy.get("#password");
  }

  get FormSignInBtn() {
    return cy.get('button[data-test="signin-submit"]');
  }

  fillUsernameInput(username) {
    this.FormUsername.type(username);
  }

  fillPasswordInput(password) {
    this.FormPassword.type(password);
  }

  clickSignInBtn() {
    this.FormSignInBtn.click();
  }

  verifyRequiredLoginDataValidationMessage(inputName) {
    cy.fixture("messages.json").then(({ requiredInput }) => {
      cy.contains(inputName + requiredInput);
      this.FormSignInBtn.should("be.disabled");
    });
  }

  verifyInvalidLoginValidationMessage() {
    cy.fixture("messages.json").then(({ invalidLogin }) => {
      cy.contains(invalidLogin);
    });
  }

  verifySuccessfullLoginAttempt() {
    cy.contains("Logout");
  }
}

export default new LoginPage();
