describe("AluraPic Criar Usuário", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com/");
  });
  it("verifica mensagens de visualização", () => {
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("button", "login").should("be.disabled");
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("a", "Sign In").click();
  });

  it("verifica mensagem de e-mail invalido", () => {
    cy.basic("email", "Invalid e-mail", "teste");
  });

  it("verifica mensagem de senha invalido", () => {
    cy.basic("password", "Mininum length is 8", "matheus");
  });

  it("verifica se usuário já existe", () => {
    cy.basic("userName", "Username already taken", "teste");
  });

  it("verifica se começa com letra maíuscula", () => {
    cy.basic("userName", "Must be lower case", "Matheus");
  });

  const users = require("../../fixtures/usuarios.json");
  users.forEach((user) => {
    it.only(`criar usuário ${user.userName}`, () => {
      cy.contains("a", "Register now").click();
      cy.contains("button", "Register").click();
      cy.get("input[formcontrolname='email']").type(user.email);
      cy.get("input[formcontrolname='fullName']").type(user.fullName);
      cy.get("input[formcontrolname='userName']").type(user.userName);
      cy.get("input[formcontrolname='password']").type(user.password);
      cy.contains("button", "Register").click();
    });
  });
});
