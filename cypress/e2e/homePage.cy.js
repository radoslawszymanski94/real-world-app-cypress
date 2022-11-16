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
  it("allows to create a new pay transaction", () => {
    HomePage.createNewTransaction("pay");
  });
  it.only("allows to create a new request transaction", () => {
    HomePage.createNewTransaction("request");
  });
});
