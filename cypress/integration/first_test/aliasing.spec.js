/*Cypress has aliasing convention, we can create our own aliases of the particular locators
Here 'charLeftSpan' is the alias created for locator [data-cy="last-name-chars-left-count"]
*/
describe('Text Box with max characters',() => {
    it('displays the appropriate remaining character count',()=>{
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');
        
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','15');
        
        cy.get('@charInput').type(' my friend')

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','5')
    });

    it('prevents the user from typing more characters once max is exceeded',()=>{
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charInput').type('adsfadf1214141414adsfasdf');

        cy.get('@charInput')
            .should('have.attr','value','adsfadf12141414');
    })

});