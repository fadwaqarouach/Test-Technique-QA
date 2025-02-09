import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("L'utilisateur accède à la page de sélection bancaire", () => {
  cy.visit("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
});

When("L'utilisateur coche la case d'acceptation des conditions", () => {
  cy.get("[role='checkbox']", { timeout: 100000 }).should("be.visible").check();

});

When("L'utilisateur clique sur le bouton {string}", (buttonName) => {
  cy.contains("button", buttonName).click();
});

When("L'utilisateur sélectionne {string}", (bankName) => {
  cy.contains(bankName).click();
});

When("L'utilisateur clique sur le champ du mot de passe", () => {
  cy.wait(5000);
  cy.get("[role='textbox']").click();
});

When("L'utilisateur vérifie l'absence d'incidents", () => {
  cy.contains("Absence d’incidents").should("be.visible");
});

Then("L'utilisateur termine le processus", () => {
  cy.get("[data-testid='finish-button']").click();
});