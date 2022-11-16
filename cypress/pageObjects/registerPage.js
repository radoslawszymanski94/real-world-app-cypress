class RegisterPage {
  get signUpPageTitle() {
    return cy.get("h1").contains("Sign Up");
  }

  get FirstNameInput() {
    return cy.get("#firstName");
  }

  get LastNameInput() {
    return cy.get("#lastName");
  }

  get UsernameInput() {
    return cy.get("#username");
  }

  get PasswordInput() {
    return cy.get("#password");
  }

  get ConfirmPasswordInput() {
    return cy.get("#confirmPassword");
  }

  get SignUpBtnInput() {
    return cy.get("button[data-test='signup-submit']");
  }

  fillFirstNameInput(firstName) {
    this.FirstNameInput.type(firstName);
  }

  fillLastNameInput(lastName) {
    this.LastNameInput.type(lastName);
  }

  fillUsernameInput(username) {
    this.UsernameInput.type(username);
  }

  fillPasswordInput(password) {
    this.PasswordInput.type(password);
  }

  fillConfirmPasswordInput(confirmPassword) {
    this.ConfirmPasswordInput.type(confirmPassword);
  }

  showAllSignUpFormValidationMessages() {
    this.FirstNameInput.focus();
    this.LastNameInput.focus();
    this.UsernameInput.focus();
    this.PasswordInput.focus();
    this.ConfirmPasswordInput.focus();
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
