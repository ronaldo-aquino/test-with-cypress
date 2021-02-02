/// reference types="cypress" />

describe("Cypress basics", () => {
  it("Shold visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    // const title = cy.title();
    // console.log(title);

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });
});
