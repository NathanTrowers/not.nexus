import terminalLog from '../support/terminalLog';

describe('404 Page', () => {
    it('renders when three non-existing URLs are entered', () => {
        cy.visit('/word', { failOnStatusCode: false });
        cy.contains('404 NOT FOUND');
        cy.contains('(no pun intended)');
        cy.contains('The URL you entered is either mistyped or does not exist.');

        cy.visit('/app', { failOnStatusCode: false });
        cy.contains('404 NOT FOUND');
        cy.contains('(no pun intended)');
        cy.contains('The URL you entered is either mistyped or does not exist.');

        cy.visit('/yoyo-man', { failOnStatusCode: false });
        cy.contains('404 NOT FOUND');
        cy.contains('(no pun intended)');
        cy.contains('The URL you entered is either mistyped or does not exist.');
    });
    it('passes accessibility checks',  () => {
        cy.visit('/word', { failOnStatusCode: false });

        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog);
    });
});
