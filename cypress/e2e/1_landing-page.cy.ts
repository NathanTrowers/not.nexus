import terminalLog from '../support/terminalLog';

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads landing page, then shows contact buttons, then returns to the previous view', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Contact').click();

    cy.contains('Contact NOT');
    cy.contains('GitHub');
    cy.contains('LinkedIn');
    cy.contains('Back').click();

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Contact');
  });

  it('loads landing page, then shows software engineering buttons, then returns to the previous view', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Software Engineering').click();

    cy.contains('!The Software Engineer');
    cy.contains('Projects');
    cy.contains('Hire NOT');
    cy.contains('Back').click();

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Contact');
  });

  it('loads landing page, then shows contact buttons, then clicks on the GitHub link', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Contact').click();

    cy.contains('Contact NOT');
    cy.contains('Back');
    cy.contains('LinkedIn');
    cy.contains('GitHub').click();

    cy.origin('https://github.com/NathanTrowers', () => {
      cy.url().should('eq', 'https://github.com/NathanTrowers');
    });
  });

  it('loads landing page, then shows contact buttons, then clicks on the LinkedIn link', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Contact').click();

    cy.contains('Contact NOT');
    cy.contains('Back');
    cy.contains('GitHub');
    cy.contains('LinkedIn').click();

    cy.origin('https://www.linkedin.com/in/nathan-trowers/', () => {
      // The below assertion will fail if the browser is not signed-in to LinkedIn
      // cy.url().should('include', 'https://www.linkedin.com/in/nathan-trowers/');
    });
  });

  it('loads landing page, then shows software engineering buttons, then navigates to the Software Portfolio Page', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Software Engineering').click();

    cy.contains('!The Software Engineer');
    cy.contains('Back');
    cy.contains('Hire NOT');
    cy.contains('Projects').click();

    cy.contains('My App Portfolio');
  });

  it('loads landing page, then shows software engineering buttons, then navigates to the Hire NOT Page', () => {
    cy.contains('Loading...');

    cy.contains('Main Menu');
    cy.contains('Software Engineering');
    cy.contains('Art');
    cy.contains('Martial Arts');
    cy.contains('Software Engineering').click();

    cy.contains('!The Software Engineer');
    cy.contains('Back');
    cy.contains('Projects');
    cy.contains('Hire NOT').click();

    cy.contains('Hire NOT page');
  });

  it('navigates to and from both the contact and softawre engineer views, checking the accessibility', () => {
    cy.injectAxe();

    cy.contains('Contact').click();
    cy.checkA11y(null, null, terminalLog);

    cy.contains('Back').click();
    cy.checkA11y(null, null, terminalLog);

    cy.contains('Software Engineering').click();
    cy.checkA11y(null, null, terminalLog);

    cy.contains('Back').click();
    cy.checkA11y(null, null, terminalLog);
  });
});
