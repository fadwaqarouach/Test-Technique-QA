Test Automatisé de Sélection Bancaire – Algoan (Playwright)

-- Objectif :
Automatiser la sélection d’une banque et vérifier la redirection vers l’authentification.


-- Installation :
 
npm install
npx playwright install

-- Exécution des Tests :

Tous les tests :
npx playwright test

Test spécifique :
npx playwright test tests/selection_bancaire.spec.ts

Mode visuel (debug) :
npx playwright test --headed

-- Scénario Testé :
  Accès à la page de sélection bancaire
  Recherche et sélection d’une banque
  Connexion et autorisation d’accès
