Feature: Buy a game in Steam market
    As a user
    I can buy a game in Steam market.

Scenario: Buy F1 2016 game
    Given I am on the market page
    When I will input game in the search field
    Then I will go to the market page of this game
    #Then I will add it to cart
    Then I will wait a bit