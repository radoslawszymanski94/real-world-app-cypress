import LoginPage from "../pageObjects/loginPage.js";

Cypress.Commands.add("loginUI", (userType) => {
  cy.fixture("user-data.json").then((data) => {
    LoginPage.fillUsernameInput(data[userType].username);
    LoginPage.fillPasswordInput(data[userType].password);
    LoginPage.clickSignInBtn();
  });
});
