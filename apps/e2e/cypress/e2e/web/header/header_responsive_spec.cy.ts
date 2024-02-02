describe('Header responsive tests', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Check XS screen elements', () => {
        cy.viewport(500, 1024);
        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});

        cy.getByDataCy('link-header-logo').should('be.visible');

        cy.getByDataCy('link-header-xs-abbreviatedHeaderText').should('be.visible');
        cy.getByDataCy('link-header-sm-headerText').should('not.be.visible');

        cy.getByDataCy('button-header-xs-menu').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-0').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-1').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-2').should('not.be.visible');

        cy.getByDataCy('button-header-xs-menu').should('be.visible').trigger('mouseover').click({force: true});
        cy.getByDataCy('button-header-xs-menu-item-0').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-1').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-2').should('be.visible');

        cy.getByDataCy('button-header-md-menu-item-0').should('not.be.visible');
        cy.getByDataCy('button-header-md-menu-item-1').should('not.be.visible');
        cy.getByDataCy('button-header-md-menu-item-2').should('not.be.visible');

        cy.getByDataCy('button-header-theme-mode').should('be.visible');
    });

    it('Check SM screen elements', () => {
        cy.viewport(700, 1024);
        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});

        cy.getByDataCy('link-header-logo').should('be.visible');

        cy.getByDataCy('link-header-xs-abbreviatedHeaderText').should('not.be.visible');
        cy.getByDataCy('link-header-sm-headerText').should('be.visible');

        cy.getByDataCy('button-header-xs-menu').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-0').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-1').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-2').should('not.be.visible');

        cy.getByDataCy('button-header-xs-menu').should('be.visible').trigger('mouseover').click({force: true});
        cy.getByDataCy('button-header-xs-menu-item-0').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-1').should('be.visible');
        cy.getByDataCy('button-header-xs-menu-item-2').should('be.visible');

        cy.getByDataCy('button-header-md-menu-item-0').should('not.be.visible');
        cy.getByDataCy('button-header-md-menu-item-1').should('not.be.visible');
        cy.getByDataCy('button-header-md-menu-item-2').should('not.be.visible');

        cy.getByDataCy('button-header-theme-mode').should('be.visible');
    });

    it('Check MD screen elements', () => {
        cy.viewport(1000, 1024);
        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});

        cy.getByDataCy('link-header-logo').should('be.visible');

        cy.getByDataCy('link-header-xs-abbreviatedHeaderText').should('not.be.visible');
        cy.getByDataCy('link-header-sm-headerText').should('be.visible');

        cy.getByDataCy('button-header-xs-menu').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-0').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-1').should('not.be.visible');
        cy.getByDataCy('button-header-xs-menu-item-2').should('not.be.visible');

        cy.getByDataCy('button-header-md-menu-item-0').should('be.visible');
        cy.getByDataCy('button-header-md-menu-item-1').should('be.visible');
        cy.getByDataCy('button-header-md-menu-item-2').should('be.visible');

        cy.getByDataCy('button-header-theme-mode').should('be.visible');
    });
});
