Feature: Performance de la connexion à une banque via Algoan Connect

  Scenario: Vérifier le temps de réponse lors de la connexion à une banque
    Given L'utilisateur accède à la page de sélection bancaire
    When L'utilisateur sélectionne "Algoan Bank"
    And L'utilisateur entre ses identifiants
    Then Le temps de réponse du serveur doit être inférieur à 2 secondes
