before(()=> { 
    cy.visit('/')
    
    // During the automation, the CLI returns a message about the uncaught exception, and that command solved it.
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
});