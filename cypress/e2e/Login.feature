Feature: Login Feature

    Feature Description

    Scenario: Success Login
        Given I am on the Home Page


    Scenario: Successful login with correct credentials
        Given I am on the Home Page
        When I click "Sign In" button
        When I enter "kyym13@gmail.com" username
        When I enter "Gost1234" password
        When I click the "Log In" button
        Then I should be logged in successfully

    Scenario: Unsuccessful login with empty fields
        Given I am on the Home Page
        When I click "Sign In" button
        When I enter " " username
        When I enter " " password
        Then I should see an error message "Email is incorrect"



    Scenario: Unsuccessful login with incorrect credentials
        Given I am on the Home Page
        When I click "Sign In" button
        When I enter "incorrect@mail.com" username
        When I enter "wrongPassword" password
        When I click the "Log In" button
        Then I should see an error message "Wrong email or password"


