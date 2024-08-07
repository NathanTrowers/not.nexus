import axe = require("axe-core");

/**
 * Callback method that logs accessibility violations to the terminal
 * in table format. 
 * 
 * This method is to be passed to cy.checkA11y()
 * 
 * @example cy.checkA11y(null, null, terminalLog);
 */
export default function terminalLog(violations: axe.Result[]) {
    cy.task(
        'log',
        `${violations.length} accessiblity violations${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    
    const violationData = violations.map(
        ({ id, impact, description,  nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )

    cy.task('table', violationData);
}
