Feature: Sélection bancaire sur l'application Transaction Data

  Scenario: L'utilisateur sélectionne une banque et se connecte sans incidents
    Given L'utilisateur accède à la page de sélection bancaire
    When L'utilisateur coche la case d'acceptation des conditions
    And L'utilisateur clique sur le bouton "Continuer vers le choix de la banque"
    And L'utilisateur sélectionne "Algoan Bank"
    And L'utilisateur clique sur "Connexion avec QR Code"
    And L'utilisateur clique sur "Redirection vers la banque"
    And L'utilisateur clique sur le bouton "Admin"
    And L'utilisateur clique sur "Connecter la banque"
    And L'utilisateur vérifie l'absence d'incidents
    And L'utilisateur clique sur "Connecter la banque"
    And L'utilisateur clique sur "Autoriser l’accès"
    And L'utilisateur valide l'agrégation
    Then L'utilisateur termine le processus
