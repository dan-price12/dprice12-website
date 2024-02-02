describe('Header theme mode tests', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Clicking Theme Mode button changes theme', () => {
        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});

        cy.getByDataCy('app-bar-header').should('have.css', 'background-color').as('originalColor');

        cy.getByDataCy('button-header-theme-mode').should('be.visible').click();

        cy.waitForStableDOM({pollInterval: 500, timeout: 10000});

        cy.getByDataCy('app-bar-header')
            .should('have.css', 'background-color')
            .as('newColor')
            .then(() => {
                cy.get('@originalColor').then((originalColor) => {
                    cy.get('@newColor').then((newColor) => {
                        expect(originalColor).to.not.eq(newColor);
                    });
                });
            });
    });
});
