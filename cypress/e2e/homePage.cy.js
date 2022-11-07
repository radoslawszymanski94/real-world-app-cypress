import HomePage from "../pageObjects/homePage.js";

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("signin");
    cy.loginUI("validUser");
  });

  it("displays transaction list", () => {
    HomePage.verifySingleTransactionAppearance();
  });
  it("displays side menu", () => {
    HomePage.verifySideMenuAppearance();
  });
  it("displays transaction tabs", () => {
    HomePage.verifyTransactionTabsAppearance();
  });
});
