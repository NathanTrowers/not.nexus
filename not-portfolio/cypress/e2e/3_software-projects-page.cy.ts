import terminalLog from '../support/terminalLog';

describe('Software Projects Page', () => {
    beforeEach(() => {
        cy.visit('/software/projects');
    });

    context('Desktop resolution', () => {
        it('loads page with project descriptions for the desktop view', () => {        
            cy.contains('!My App Portfolio');

            cy.contains('Personal');
            cy.contains('Professional');
    
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
    
            cy.contains('ComicComet');
            cy.contains('Shop at a fake online comic book store!');
            cy.contains('Tech Stack: Spring Boot (Java) and Angular');
            cy.contains('View the ComicComet GitHub Repo!');
    
            cy.contains('AndroidAce');
            cy.contains('Take a quiz on Android app development!');
            cy.contains('Tech Stack: Java with Android SDK');
            cy.contains('View the AndroidAce GitHub Repo!');
    
            cy.contains('not.nexus (this website)');
            cy.contains('Portfolio Website of Nathan O. Trowers.');
            cy.contains('Tech Stack: Next.js (TypeScript)');
            cy.contains('View the not.nexus (this website) GitHub Repo!');
        });
    
        it('passes accessibility checks on the desktop view', () => {
            cy.injectAxe();
            cy.checkA11y(null, null, terminalLog);
        });
    });


    context('Samsung Galaxy S20 Android 11 resolution', () => {
        it('loads page with project descriptions for the mobile view using the arrow buttons', () => {
            cy.viewport(412, 915);
            cy.contains('!My App Portfolio');

            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
        
            cy.getByData('next-button').click();
            cy.contains('ComicComet');
            cy.contains('Shop at a fake online comic book store!');
            cy.contains('Tech Stack: Spring Boot (Java) and Angular');
            cy.contains('View the ComicComet GitHub Repo!');
        
            cy.getByData('next-button').click();
            cy.contains('AndroidAce');
            cy.contains('Take a quiz on Android app development!');
            cy.contains('Tech Stack: Java with Android SDK');
            cy.contains('View the AndroidAce GitHub Repo!');
        
            cy.getByData('next-button').click();
            cy.contains('not.nexus (this website)');
            cy.contains('Portfolio Website of Nathan O. Trowers.');
            cy.contains('Tech Stack: Next.js (TypeScript)');
            cy.contains('View the not.nexus (this website) GitHub Repo!');

            cy.getByData('next-button').click();
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');

            cy.getByData('prev-button').click();
            cy.contains('not.nexus (this website)');
            cy.contains('Portfolio Website of Nathan O. Trowers.');
            cy.contains('Tech Stack: Next.js (TypeScript)');
            cy.contains('View the not.nexus (this website) GitHub Repo!');
            
            cy.getByData('prev-button').click();
            cy.contains('AndroidAce');
            cy.contains('Take a quiz on Android app development!');
            cy.contains('Tech Stack: Java with Android SDK');
            cy.contains('View the AndroidAce GitHub Repo!');
            
            cy.getByData('prev-button').click();
            cy.contains('ComicComet');
            cy.contains('Shop at a fake online comic book store!');
            cy.contains('Tech Stack: Spring Boot (Java) and Angular');
            cy.contains('View the ComicComet GitHub Repo!');

            cy.getByData('prev-button').click();
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
        });

        it('loads page with project descriptions for the mobile view using the card dots', () => {
            cy.viewport(412, 915);
            cy.contains('!My App Portfolio');
        
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
        
            cy.getByData('card-dot-two').click();
            cy.contains('ComicComet');
            cy.contains('Shop at a fake online comic book store!');
            cy.contains('Tech Stack: Spring Boot (Java) and Angular');
            cy.contains('View the ComicComet GitHub Repo!');
        
            cy.getByData('card-dot-three').click();
            cy.contains('AndroidAce');
            cy.contains('Take a quiz on Android app development!');
            cy.contains('Tech Stack: Java with Android SDK');
            cy.contains('View the AndroidAce GitHub Repo!');
        
            cy.getByData('card-dot-four').click();
            cy.contains('not.nexus (this website)');
            cy.contains('Portfolio Website of Nathan O. Trowers.');
            cy.contains('Tech Stack: Next.js (TypeScript)');
            cy.contains('View the not.nexus (this website) GitHub Repo!');

            cy.getByData('card-dot-one').click();
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
        });

        it('passes accessibility checks for the mobile view', () => {
            cy.injectAxe();
            
            cy.viewport(412, 915);
            cy.contains('!My App Portfolio');
        
            cy.contains('Study Log');
            cy.contains('Track and review your study habits!');
            cy.contains('Tech Stack: MERN Stack (JavaScript)');
            cy.contains('View the Study Log GitHub Repo!');
            cy.checkA11y(null, null, terminalLog);

            cy.getByData('card-dot-two').click();
            cy.contains('ComicComet');
            cy.contains('Shop at a fake online comic book store!');
            cy.contains('Tech Stack: Spring Boot (Java) and Angular');
            cy.contains('View the ComicComet GitHub Repo!');
            cy.checkA11y(null, null, terminalLog);
        
            cy.getByData('card-dot-three').click();
            cy.contains('AndroidAce');
            cy.contains('Take a quiz on Android app development!');
            cy.contains('Tech Stack: Java with Android SDK');
            cy.contains('View the AndroidAce GitHub Repo!');
            cy.checkA11y(null, null, terminalLog);
        
            cy.getByData('card-dot-four').click();
            cy.contains('not.nexus (this website)');
            cy.contains('Portfolio Website of Nathan O. Trowers.');
            cy.contains('Tech Stack: Next.js (TypeScript)');
            cy.contains('View the not.nexus (this website) GitHub Repo!');
            cy.checkA11y(null, null, terminalLog);
        });
    });
});
