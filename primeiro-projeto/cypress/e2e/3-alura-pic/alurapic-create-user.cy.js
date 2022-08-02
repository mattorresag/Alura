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
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("button", "login").should("be.disabled");
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=email]").type("matheus");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });

  it("verifica mensagem de senha invalido", () => {
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("button", "login").should("be.disabled");
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=password]").type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });

  it("verifica se usuário já existe", () => {
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("button", "login").should("be.disabled");
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=userName]").type("teste");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Username already taken").should("be.visible");
  });

  it("verifica se começa com letra maíuscula", () => {
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("button", "login").should("be.disabled");
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get("input[formcontrolname=userName]").type("Teste");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });
});
