describe('Store Switcher', () => {
    it('should allow the user to switch stores', () => {
        // Visit the homepage
        cy.visit('/');

        // Open storeview-switcher-button button and click
        cy.get('.storeview-switcher-button > button')
            .should('be.visible')
            .click();

        // Check if storeview-modal is visible
        cy.get('#storeview-modal')
            .should('be.visible');

        // Check if storeview-modal-storeview-title is visible and contains string "Select a store"
        cy.get('.storeview-modal-storeview-title')
            .should('be.visible')
            .contains('Select a store');

        // Check if storeview-modal-storeview-list is visible
        cy.get('.storeview-modal-storeview-list')
            .should('be.visible');

        // Check if storeview-modal-storeview-list contains at least 2 stores
        cy.get('.storeview-modal-storeview-list a')
            .should('have.length.greaterThan', 1);

        // check if storeview-single-store and storeview-multiple-stores are visible
        cy.get('.storeview-single-store, .storeview-multiple-stores')
            .should('be.visible');

        // When clicking on storeview-multiple-stores, an accordion dropdown should open with more than or equal to two links
        cy.get('.storeview-multiple-stores')
            .click()
            .get('.storeview-multiple-stores > ul')
            .should('be.visible')
            .find('li')
            .should('have.length.greaterThan', 1);

        // storeview-single-store should contain a single link
        cy.get('.storeview-single-store')
            .find('a')
            .should('have.length', 1);


        cy.get('.storeview-single-store a').click();

        // Open storeview-switcher-button button and click
        cy.get('.storeview-switcher-button > button')
            .should('be.visible')
            .click();

        cy.get('.storeview-multiple-stores')
            .click()
            .get('.storeview-multiple-stores > ul')
            .should('be.visible')
    });
});