Feature: Buy a game in Steam market
    As a user
    I can buy a game in Steam market.

Scenario: Steam login
	Given I am on the market page
	Then I will log in
	Then I will wait a bit

Scenario: Buy F1 2016 game
    Given I am on the market page
    When I will input 'F1 2016' in the search field
    Then I will go to the page of this game
    Then I will add game to the cart
    Then purchase game for my self
    Then I will wait a bit