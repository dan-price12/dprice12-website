/// <reference types="cypress-wait-for-stable-dom" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Alias for cy.get(`[data-cy="{$dataCyAttribute}"]`)
         * @param dataCyAttribute
         * @param options
         */
        getByDataCy(
            dataCyAttribute: string,
            options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>
        ): Chainable<JQuery<HTMLElement>>;
        /**
         * Alias for cy.get(`[data-cy*="{$dataCyAttribute}"]`)
         * @param dataCyAttribute
         * @param options
         */
        getByDataCyLike(
            dataCyPrefixAttribute: string,
            options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>
        ): Chainable<JQuery<HTMLElement>>;
    }
}
