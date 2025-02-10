import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("L'utilisateur accède à la page de connexion bancaire", () => {
  cy.visit("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
});

When("L'utilisateur coche la case de consentement", () => {
  cy.wait(10000);
  cy.get('.sc-Rjrgp').find('input[type="checkbox"]').check();
});

When("L'utilisateur clique sur le bouton {string}", (button) => {
  cy.wait(5000);
  cy.get('button').contains('Continuer vers le choix de la banque').click();


});

When("L'utilisateur clique sur le champ de recherche de banque", () => {
  cy.get('[data-testid="bank-search-input"]').click();
});

When("L'utilisateur saisit {string} dans le champ de recherche", (bankName) => {
  cy.get('[data-testid="bank-search-input"]').type(bankName);
});

When("L'utilisateur sélectionne {string} dans la liste", (bankName) => {
  cy.contains(bankName).first().click();
});

When("L'utilisateur clique sur le bouton de redirection bancaire", () => {
  cy.get('[data-testid="bank-redirection-button"]').click();
});

When("L'utilisateur sélectionne les informations de scoring", () => {
  /*cy.get('div')
    .filter((_, el) => /Score élevéReste à vivre élevéAbsence d’incidents/.test(el.innerText))
    .eq(1)
    .click();*/
    cy.get('.sc-iqyJx.huBGmD').first().click();
    
});

Then("L'utilisateur finalise le processus en cliquant sur le bouton de fin", () => {
  cy.wait(10000);
  cy.get('.sc-cHqXqK ihrlSP').click();
});
