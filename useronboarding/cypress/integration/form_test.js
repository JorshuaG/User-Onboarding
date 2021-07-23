const nameInput = () => cy.get('input[name="name"]');
const emailInput = () => cy.get('input[name="email"]');
const passwordInput = () => cy.get('input[name="password"]');
const termsInput = () => cy.get('input[name="terms"]');
const submitButton = () => cy.get('button[id="submitBtn"]');
const nameErrorMsg = () => cy.get('div[id="nameErrorMsg"]');
const emailErrorMsg = () => cy.get('div[id="emailErrorMsg"]');
const passwordErrorMsg = () => cy.get('div[id="passwordErrorMsg"]');
const termsErrorMsg = () => cy.get('div[id="termsErrorMsg"]');

describe("Form App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });
  it("Check for all of the elements", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsInput().should("exist");
    submitButton().should("exist");
  });

  it("Check submit button is disabled", () => {
    submitButton().should("be.disabled");
  });
  it("Checking text inputs can be typed", () => {
    nameInput()
      .should("have.value", "")
      .type("Josh")
      .should("have.value", "Josh");

    emailInput()
      .should("have.value", "")
      .type("josh@josh.com")
      .should("have.value", "josh@josh.com");

    passwordInput()
      .should("have.value", "")
      .type("abc123")
      .should("have.value", "abc123");

    termsInput().should("have.value", "false").check();
  });
  it("Submit button should be enabled", () => {
    nameInput().type("Josh");
    emailInput().type("josh@josh.com");
    passwordInput().type("abc123");
    termsInput().check();
    submitButton().should("not.be.disabled").click();
  });
  it("Check for validation", () => {
    nameInput()
      .should("have.value", "")
      .type("Josh")
      .clear()
      .should("have.value", "");

    emailInput()
      .should("have.value", "")
      .type("josh@josh.com")
      .clear()
      .should("have.value", "");

    passwordInput()
      .should("have.value", "")
      .type("abc123")
      .clear()
      .should("have.value", "");

    termsInput()
      .should("have.value", "false")
      .check()
      .uncheck()
      .should("have.value", "false");

    nameErrorMsg().should("exist");
    emailErrorMsg().should("exist");
    passwordErrorMsg().should("exist");
    termsErrorMsg().should("exist");
  });
});
