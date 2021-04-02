import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps"
import { Then } from "cypress-cucumber-preprocessor/steps";

Given('User goes to Ratify home page', () => {
  cy.log(Cypress.config().baseUrl)
  cy.visit('/')
})


When('User enters details to login', () => {
    cy.get('input[name="email"').type('ozgurerisir@gmail.com');
    cy.get('input[name="password"').type('gogogo');
    cy.get('button[id="signin"]').click();
})

When('User enters incorrect details to login', () => {
    cy.get('input[name="email"').type('incorrect@gmail.com');
    cy.get('input[name="password"').type('gogogo');
    cy.get('button[id="signin"]').click();
})

When('User enters incorrect details to login with no password', () => {
    cy.get('input[name="email"').type('incorrect@gmail.com');
    cy.get('button[id="signin"]').click();
})

When('User enters incorrect details to login with no email', () => {
    cy.get('button[id="signin"]').click();
})

When('User enters incorrect details to login with no email and password', () => {
    cy.get('input[name="password"').type('gogogo');
    cy.get('button[id="signin"]').click();
})


Then('User ends up in logged in home page', () => {
    cy.get('[data-cy=profile]').should('be.visible')
})

Then('User gets incorrect details error', () => {
  cy.get('[data-cy=login-error]').should('have.text', 'Email or Password is incorrect')
}) 


Then('User gets insufficient details error', () => {
  cy.get('[data-cy=login-error]').should('have.text', 'Please provide an email and password')
})