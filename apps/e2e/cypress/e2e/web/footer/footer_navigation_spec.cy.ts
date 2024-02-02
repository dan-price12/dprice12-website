describe('Footer navigation tests', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Navigate to Privacy Policy', () => {
        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-footer-item-0').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/privacy`);
    });
});
