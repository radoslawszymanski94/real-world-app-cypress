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

  get newTransactionBtn() {
    return cy.get("a[data-test='nav-top-new-transaction']");
  }

  get contactSearchInput() {
    return cy.get("#user-list-search-input");
  }

  get foundContact() {
    return cy.get("li[data-test^='user-list-item-']").first();
  }

  get newTransactionAmountInput() {
    return cy.get("#amount");
  }

  get newTransactionDescriptionInput() {
    return cy.get("#transaction-create-description-input");
  }

  get newTransacitonPayBtn() {
    return cy.get('button[data-test="transaction-create-submit-payment"]');
  }

  get newTransacitonRequestBtn() {
    return cy.get('button[data-test="transaction-create-submit-request"]');
  }

  get accountBalance() {
    return cy.get('h6[data-test="sidenav-user-balance"]');
  }

  get transactionSuccessMessage() {
    return cy.get('div[data-test="alert-bar-success"]');
  }

  clickNewTransactionBtn() {
    this.newTransactionBtn.click();
  }

  findContact(user) {
    this.contactSearchInput.type(user);
  }

  clickFoundContact() {
    this.foundContact.click();
  }

  fillNewTransactionAmountInput(amount) {
    this.newTransactionAmountInput.type(amount);
  }

  fillNewTransactionDescriptionInput(description) {
    this.newTransactionDescriptionInput.type(description);
  }

  clickNewTransactionPayBtn() {
    this.newTransacitonPayBtn.click();
  }

  clickNewTransactionRequestBtn() {
    this.newTransacitonRequestBtn.click();
  }

  verifySuccessMessageAfterTransaction() {
    this.transactionSuccessMessage.should("be.visible");
  }

  verifyAccountBalanceAfterTransaction(balance) {
    this.accountBalance.should("contain.text", balance);
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
