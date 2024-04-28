import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Home Page', () => {
   
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: "guest",
            password: "welcome2qauto",
        },
    }); 
});

When('I click "Sign In" button', () => {
    cy.get('button.header_signin').click();
})

When('I enter {string} username', (username) => {
        cy.get('#signinEmail').type(username);
    
});

When('I enter {string} password', (password) => {
    cy.get('#signinPassword').type(password);
});

When('I click the "Log In" button', () => {
    cy.get('.btn-primary').contains('Login').click();
});

Then('I should be logged in successfully', () => {
    cy.contains("h1", "Garage").should("be.visible"); 
});


Then('I should see an error message {string}', (errorMessage) => {
    if (errorMessage === "Email required" || errorMessage === "Password required") {
        cy.get('div.invalid-feedback p').should('contain', errorMessage);
    } else if (errorMessage === "Wrong email or password") {
        cy.get('p.alert.alert-danger').should('contain', errorMessage);
    }
});

Then('I should see an error message {string}', (errorMessage) => {
    cy.get('p.alert.alert-danger').should('contain', 'Wrong email or password');

});



