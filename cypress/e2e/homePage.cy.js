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
  it.only("allows to create a new transaction", () => {
    HomePage.clickNewTransactionBtn();
    cy.fixture("transaction.json").then(({ receiverName, amount, description }) => {
      HomePage.findContact(receiverName);
      HomePage.clickFoundContact();
      HomePage.fillNewTransactionAmountInput(amount);
      HomePage.fillNewTransactionDescriptionInput(description);
    });
    HomePage.clickNewTransactionPayBtn();
    HomePage.verifySuccessMessageAfterTransaction();
    HomePage.verifyAccountBalanceAfterTransaction("0.00");
  });
});
