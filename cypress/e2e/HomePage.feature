Feature: Home Page Feature

    Feature Description

     Scenario: Presence of five social media icons
    Given I am on the Home Page
    Then I should see five social media icons

  Scenario: Open Sign Up form
    Given I am on the Home Page
    When I click on the "Sign Up" button
    Then the registration form should be displayed

  Scenario: Open Sign In form
    Given I am on the Home Page
    When I click on the "Sign In" button
    Then the login form should be displayed