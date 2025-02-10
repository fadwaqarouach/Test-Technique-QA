Feature: Connexion à Algoan Bank et validation des données

Scenario: L'utilisateur connecte sa banque Algoan avec succès
  Given L'utilisateur accède à la page de connexion bancaire
  When L'utilisateur coche la case de consentement
  And L'utilisateur clique sur le bouton "Continuer vers le choix de la banque"
  And L'utilisateur clique sur le champ de recherche de banque
  And L'utilisateur saisit "algoan bank" dans le champ de recherche
  And L'utilisateur sélectionne "Algoan Bank" dans la liste
  And L'utilisateur clique sur le bouton "Connexion avec QR Code"
  And L'utilisateur clique sur le bouton de redirection bancaire
  And L'utilisateur sélectionne les informations de scoring
  And L'utilisateur clique sur le bouton "Connecter la banque"
  And L'utilisateur clique sur le bouton "Autoriser l’accès"
  And L'utilisateur valide l'agrégation des comptes
  Then L'utilisateur finalise le processus en cliquant sur le bouton de fin
