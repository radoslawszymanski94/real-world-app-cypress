class RegisterPage {
  get signUpPageTitle() {
    return cy.get("h1").contains("Sign Up");
  }

  get FormFirstName() {
    return cy.get("#firstName");
  }

  get FormLastName() {
    return cy.get("#lastName");
  }

  get FormUsername() {
    return cy.get("#username");
  }

  get FormPassword() {
    return cy.get("#password");
  }

  get FormConfirmPassword() {
    return cy.get("#confirmPassword");
  }

  get FormSignUpBtn() {
    return cy.get("button[data-test='signup-submit']");
  }

  fillFirstNameInput(firstName) {
    this.FormFirstName.type(firstName);
  }

  fillLastNameInput(lastName) {
    this.FormLastName.type(lastName);
  }

  fillUsernameInput(username) {
    this.FormUsername.type(username);
  }

  fillPasswordInput(password) {
    this.FormPassword.type(password);
  }

  fillConfirmPasswordInput(confirmPassword) {
    this.FormConfirmPassword.type(confirmPassword);
  }

  showAllSignUpFormValidationMessages() {
    this.FormFirstName.focus();
    this.FormLastName.focus();
    this.FormUsername.focus();
    this.FormPassword.focus();
    this.FormConfirmPassword.focus();
    this.clickSignUpBtn();
  }

  verifyRequiredRegisterDataValidationMessages() {
    cy.fixture("messages.json").then(
      ({ requiredInput, requiredPasswordInput, requiredConfirmPasswordInput }) => {
        const inputsNames = ["First Name ", "Last Name ", "Username "];
        this.showAllSignUpFormValidationMessages();
        inputsNames.map((inputName) => {
          cy.contains(inputName + requiredInput);
        });
        cy.contains(requiredPasswordInput);
        cy.contains(requiredConfirmPasswordInput);
        this.FormSignUpBtn.should("be.disabled");
      }
    );
  }

  verifySuccessfullRegisterAttempt() {
    cy.contains("Sign In");
  }

  clickSignUpBtn() {
    this.FormSignUpBtn.click({ force: true });
  }
}

export default new RegisterPage();
