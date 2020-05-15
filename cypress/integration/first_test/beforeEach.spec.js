/*Cypress has aliasing convention, we can create our own aliases of the particular locators
Here 'charLeftSpan' and 'charInput' are the alias created for locator [data-cy="last-name-chars-left-count"]
and [data-cy="input-last-name"]
the base url is coming from cypress.json and the path (/example-3) is defined inside beforeEach
*/

describe('User enters Max Characters in Text Box',() => {
    beforeEach(()=> {
        cy.visit('/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');
    });

    it('The appropriate remaining character count is displayed',()=>{
        
        //Jquery-Chai assertion
        cy.get('@charsLeftSpan')
        .then($charsLeftSpan => {
            expect($charsLeftSpan.text().to.equal('15'))
        })
            // .invoke('text')
            // .should('equal','15')
        
        cy.get('@charInput').type(' my friend')
        
        // Cypress style assertions
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal','5')
    });

    it('The user is prevented from typing more characters once max is exceeded',()=>{
    
        cy.get('@charInput').type('adsfadf1214141414adsfasdf');

        cy.get('@charInput')
            .should('have.attr','value','adsfadf12141414');
    })

});