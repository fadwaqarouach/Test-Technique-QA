import { test, expect } from "@playwright/test";

test("Sélection et redirection bancaire", async ({ page }) => {
  
  await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com"); 

  await page.locator('.sc-FFETS').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continuer vers le choix de la' }).click();
  await page.getByTestId('main-content').locator('div').filter({ hasText: 'Sélectionnez votre' }).first().click();
  await page.getByTestId('bank-search-input').click();
  await page.getByTestId('bank-search-input').press('CapsLock');
  await page.getByTestId('bank-search-input').fill('Algoan ');
  await page.getByTestId('bank-search-input').press('CapsLock');
  await page.getByTestId('bank-search-input').fill('Algoan Bank');
  await page.getByTestId('bank-search-input').press('Enter');
  await page.locator('.sc-irPVuy').first().click();
  await page.getByTestId('connection-with-qr-code-button').click();
  await page.getByText('Connectez votre banqueAlgoan').click();
  await page.getByTestId('bank-redirection-button').click();
  await page.locator('div').filter({ hasText: /^Score élevéReste à vivre élevéAbsence d’incidents$/ }).nth(1).click();
  await page.getByRole('textbox', { name: '*****************' }).click();
  await page.getByRole('button', { name: 'Connecter la banque' }).click();
  await page.getByRole('button', { name: 'Autoriser l’accès' }).click();
  await page.getByTestId('validate-aggregation').click();
  await page.getByText('Algoan BankDonnées récupérées').nth(1).click();
  await page.getByTestId('finish-button').click();
  await page.getByTestId('input-Email').click();
  await page.getByTestId('input-Password').click();

 
  await expect(page).toHaveURL(/https:\/\/auth\.algoan\.com\/auth\/realms\/algoan\/protocol\/openid-connect\/auth\?client_id=dashboard-webapp/);
  
  await page.screenshot({ path: "screenshots/selection_banque.png" });
  
});
