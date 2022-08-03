Cypress.Commands.add("basic", (formcontrolname, message, name) => {
  cy.contains("ap-vmessage", "User name is required!").should("be.visible");
  cy.contains("ap-vmessage", "Password is required!").should("be.visible");
  cy.contains("button", "login").should("be.disabled");
  cy.contains("a", "Register now").click();
  cy.contains("button", "Register").click();
  cy.get(`input[formcontrolname="${formcontrolname}"]`).type(name);
  cy.contains("button", "Register").click();
  cy.contains("ap-vmessage", message).should("be.visible");
});
