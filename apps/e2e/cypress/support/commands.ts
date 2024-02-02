/// <reference types="cypress" />
import {registerCommand} from 'cypress-wait-for-stable-dom';

Cypress.Commands.add('getByDataCy', (dataCyAttribute, ...options) => {
    return cy.get(`[data-cy="${dataCyAttribute}"]`, ...options);
});

Cypress.Commands.add('getByDataCyLike', (dataCyAttribute, ...options) => {
    return cy.get(`[data-cy*="${dataCyAttribute}"]`, ...options);
});

registerCommand();
