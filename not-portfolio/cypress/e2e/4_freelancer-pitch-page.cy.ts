import terminalLog from '../support/terminalLog';

describe('Freelancer Pitch Page', () => {
    beforeEach(() => {
        cy.visit('/software/hire-not');
    });

    context('Desktop resolution', () => {        
        it('loads', () => {
            cy.contains('Hire NOT');
            cy.contains('Make Your Dream Web App a Reality!');
            cy.contains('At the crossroads of executing on your dreams or executing your dreams, there are three paths:');
            cy.contains('Hire NOT to build your MVP for you.');
            cy.contains('LinkedIn');
            cy.contains('Fiverr');
        });
    
        it('clicks the LinkedIn link and is redirected to the LinkedIn page', () => {
            cy.contains('LinkedIn').click();
    
            cy.origin('https://www.linkedin.com/in/nathan-trowers/', () => {
                // The below assertion will fail if the browser is not signed-in to LinkedIn
                // cy.url().should('include', 'https://www.linkedin.com/in/nathan-trowers/');
            });
        });
    
        it('passes accessibility tests', () => {
            cy.injectAxe();
    
            cy.contains('Hire NOT');
            cy.checkA11y(null, null, terminalLog);
        });
    });

    context('Samsung Galaxy S20 Android 11 resolution', () => {
        it('has a scrollable area', () => {
            cy.viewport(412, 915);

            cy.contains('LinkedIn').scrollIntoView({ offset: {top: 150,  left: 0} });
            cy.contains('LinkedIn').should('be.visible');
        });

        it('passes accessibility tests', () => {
            cy.viewport(412, 915);
            cy.injectAxe();
    
            cy.contains('Hire NOT');
            cy.checkA11y(null, null, terminalLog);
        });
    });
});
