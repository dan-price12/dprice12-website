describe('Header navigation tests', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Navigate to Services on XS screen', () => {
        cy.viewport(500, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu-item-0').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/services`);
    });

    it('Navigate to About on XS screen', () => {
        cy.viewport(500, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu-item-1').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/about`);
    });

    it('Navigate to Contact on XS screen', () => {
        cy.viewport(500, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-xs-menu-item-2').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);
    });

    it('Navigate to Services on MD screen', () => {
        cy.viewport(1000, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-md-menu-item-0').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/services`);
    });

    it('Navigate to About on MD screen', () => {
        cy.viewport(1000, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-md-menu-item-1').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/about`);
    });

    it('Navigate to Contact on MD screen', () => {
        cy.viewport(1000, 1024);

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('button-header-md-menu-item-2').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/contact`);
    });

    it('Navigate to Home on XS screen via Logo', () => {
        cy.viewport(500, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-logo').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });

    it('Navigate to Home on XS screen via Header Text', () => {
        cy.viewport(500, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-xs-abbreviatedHeaderText').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });

    it('Navigate to Home on SM screen via Logo', () => {
        cy.viewport(700, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-logo').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });

    it('Navigate to Home on SM screen via Header Text', () => {
        cy.viewport(700, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-sm-headerText').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });

    it('Navigate to Home on MD screen via Logo', () => {
        cy.viewport(1000, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-logo').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });

    it('Navigate to Home on MD screen via Header Text', () => {
        cy.viewport(1000, 1024);
        cy.visit('/services');

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.getByDataCy('link-header-sm-headerText').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});
        cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    });
});
