describe("buscar fotos e dados", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // const users = require("../../fixtures/usuarios.json");
  it(`buscar fotos do flavio`, () => {
    cy.request({
      method: "GET",
      url: `https://apialurapic.herokuapp.com/flavio/photos`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).is.not.empty;
      expect(response.body[0]).to.have.property("description");
      expect(response.body[0].description).to.be.equal("Farol iluminado");
    });
  });
  it(`fazer login do flavio`, () => {
    cy.request({
      method: "POST",
      url: `https://apialurapic.herokuapp.com/user/login`,
      body: Cypress.env(),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).is.not.empty;
      expect(response.body).to.have.property("id");
      expect(response.body.id).is.eq(1);
    });
  });
});
