class HomePage {
  get transactionList() {
    return cy.get("div[data-test='transaction-list']");
  }

  get sideMenu() {
    return cy.get("div[data-test='sidenav']");
  }

  get transactionTabs() {
    return cy.get("div[data-test='nav-transaction-tabs']");
  }

  verifySingleTransactionAppearance() {
    this.transactionList.should("be.visible");
  }

  verifySideMenuAppearance() {
    this.sideMenu.should("be.visible");
  }

  verifyTransactionTabsAppearance() {
    this.transactionTabs.should("be.visible");
  }
}

export default new HomePage();
