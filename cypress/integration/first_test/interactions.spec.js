describe ('Basic page interaction in Cypress',() => {

    beforeEach(() => {
        cy.visit('/example-4');
    });
    it('the header is set to the item\'s name when double clicked',() =>{
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick(); //double clicks on element
        
        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal','Option Two');
    });

    it('The correct count of the selected checkboxes is displayed',()=> {

        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check(); //checks the check box
        
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(2) input')
            .check(); 
        
            cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal','2');
    });

    it('The name of the currently selected item is displayed',()=> {
        
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three') //selecting something from a dropdown
        
        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text') //gets the text from the page
            .should('equal', 'Option Three');

    });

    it('The name of the most recently hovered item is displayed', ()=> {
        cy.get('[data-cy=box-4-items-list] > :nth-child(1)')
            .trigger('mouseover'); // trigger command is used to simulate mouse interactions
        
        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option One' );
    })
})