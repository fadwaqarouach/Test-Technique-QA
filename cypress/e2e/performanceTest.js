import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("L'utilisateur accède à la page de sélection bancaire", () => {
  cy.visit("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
});

When("L'utilisateur clique sur le bouton {string}", (buttonName) => {
  cy.contains("button", buttonName).click();
});

When("L'utilisateur sélectionne {string}", (bankName) => {
  cy.contains(bankName).click();
});

When("L'utilisateur effectue une sélection de banque", () => {
    cy.wait(10000);
    cy.get("[data-testid='bank-search-input']").type("Algoan Bank");
  cy.contains("Algoan Bank").click();
});

When("L'utilisateur entre ses identifiants", () => {
  cy.get("[role='textbox']").first().type("testUser"); // Champ utilisateur
  cy.get("[role='textbox'][type='password']").type("testPassword"); // Champ mot de passe
});

Then("Un message d'erreur s'affiche", () => {
  cy.contains("Erreur").should("be.visible");
});
