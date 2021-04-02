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
    var name = chance.name({length: 8});
    var password = chance.string({ length: 8 })
    var email = chance.email();
    var lastname = chance.name({ length: 8});

    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-username]').type(name);
    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-lastname]').type(lastname);
    cy.get('[data-cy=signup-email]').type('test' + email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-agree]').click();
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
    cy.get('[data-cy=signup-agree]').click();
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without email', () => {
    var name = chance.name();
    var password = chance.string({ length: 8 })
    var email = chance.email();
    var lastname = chance.name({ length: 8});

    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-lastname]').type(lastname);    
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-agree]').click();
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
    cy.get('[data-cy=signup-agree]').click();
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without password confirm', () => {
    var name = chance.name({length: 6});
    var password = chance.string({ length: 8 })
    var email = chance.email();
    var lastname = chance.name({ length: 8});
  
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-username]').type(name);
    cy.get('[data-cy=signup-lastname]').type(lastname);
    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-agree]').click();
    cy.get('[data-cy=signup-submit]').click();
})


When('User enters details to Sign up without accepting terms', () => {
    var name = chance.name({ length: 8});
    var lastname = chance.name({ length: 8});

    var password = chance.string({ length: 8 })
    var email = chance.email();
    
    cy.log(name);
    cy.log(email);

    cy.get('[data-cy=signup-username]').type(name);
    cy.get('[data-cy=signup-lastname]').type(lastname);
    cy.get('[data-cy=signup-name]').type(name);
    cy.get('[data-cy=signup-email]').type('test' + email);
    cy.get('[data-cy=signup-password]').type(password);
    cy.get('[data-cy=signup-passwordconfirm]').type(password);
    cy.get('[data-cy=signup-submit]').click();
})

When('User enters details to Sign up without any fields', () => {
    cy.get('[data-cy=signup-submit]').click();
})

Then('User gets please provide your name error', () => {
  cy.get('[data-cy=signup-error]').should('have.text', 'Please populate all fields')
})

Then('User gets accept terms error', () => {
  cy.get('[data-cy=signup-error]').should('have.text', 'Terms and conditions need to be accepted')
})


Then('User gets password mismatch error', () => {
  cy.get('[data-cy=signup-error]').should('have.text', 'Passwords do not match')
})