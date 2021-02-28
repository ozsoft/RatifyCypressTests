/// <reference types="cypress" />
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps"
import { Then } from "cypress-cucumber-preprocessor/steps";
// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

Given('User goes to Ratify home page', () => {
  cy.visit('/')
})

Given('User clicks on Sign up button', () => {
    cy.get('[data-cy=signup]').should('be.visible').click()

})

When('User enters details to Sign up', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})


Then('User ends up in logged in home page', () => {
    cy.get('[data-cy=profile]').should('be.visible')
}) 

When('User enters details to Sign up without name', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without email', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without password', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without password confirm', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without any fields', () => {
    cy.get('[data-cy=signup-submit]').click();
})

Then('User gets please provide your name error', () => {
  cy.get('[data-cy=signup-error]').should('have.text', 'Please populate all fields')
})


Then('User gets password mismatch error', () => {
  cy.get('[data-cy=signup-error]').should('have.text', 'Passwords do not match')
})