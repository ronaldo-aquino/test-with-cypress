/// reference types="cypress" />

describe("", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Deve aguardar elemento estar disponível", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("Funciona");
  });

  it("Deve fazer retrys", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo")
      // .should("not.exist")
      .should("exist")
      .type("funciona");
  });

  it("Uso do find", () => {
    cy.get("#buttonListDOM").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");

    // cy.get("#lista li")
    //   .find("span")
    //   .should("contain", "Item 2");

    cy.get("#lista li span").should("contain", "Item 2");
  });

  it("Uso do timeout", () => {
    // cy.get("#buttonDelay").click();
    // cy.get("#novoCampo").should("exist");

    // cy.get("#buttonListDOM").click();
    // cy.get("#lista li span", {timeout: 30000}).should("contain", "Item 2");

    cy.get("#buttonDelay").click();
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").should("have.length", 1);
    cy.get("#lista li span").should("have.length", 2);
  });

  it("Click retry", () => {
    cy.get("#buttonCount").click().click().should("have.value", "111");
  });

  it.only("Should vs then", () => {
    cy.get("#buttonListDOM")
      .then(($el) => {
        // console.log($el);
        expect($el).to.have.length(1);
        cy.get("#buttonList");
      })
      // .and("eq", 2)
      // .and("not.have.id", "buttonListDOM");
  });
});
