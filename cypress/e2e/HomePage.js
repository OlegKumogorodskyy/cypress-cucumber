import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Home Page', () => {
 
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: "guest",
            password: "welcome2qauto",
        },
    }); 
});

Then('I should see five social media icons', () => {
    cy.get('.socials_icon').should('have.length', 5);
});

When('I click on the "Sign Up" button', () => {
    cy.contains("Sign up").click();
    
});

Then('the registration form should be displayed', () => {
    cy.get(".modal-title").should("be.visible");
});

When('I click on the "Sign In" button', () => {
    cy.contains('Sign In').click();
});

Then('the login form should be displayed', () => {
    cy.get(".modal-title").should("be.visible");
});



