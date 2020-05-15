**Cypress**
is a JavaScript based End to End testing framework. Can be used for testing APIs and UI. Runs in Browser using cypress interface. Supports chrome, firefox and electron browsers. 

A Simple POC to see some assertions style provided by cypress and interactions available in cypress. Cypress supports writing tests in Jquery and also Chai style BDD assertions

---
Example:
```
cy.get('@charsLeftSpan')
        .then($charsLeftSpan => {
            expect($charsLeftSpan.text().to.equal('15'))
```
See beforeEach.spec.js for details

---
***Some Useful commands***
* npm init - y -> To initiate Cypress project
* npm instal--save-dev -> To install Cypress
* npx cypress open -> Opens Cypress interface
---
***Common assertions in cypress***

* To check number of items
``` .should('have.length', length)```

* Checking for existing
```.should('exist') or .should('not.exist')```

* Checking for CSS class
```.should('have.class', {name_of_class})```

* Checking for text
 ```.invoke('text).should('contain').should('not.contain')```
 
 ---
***Notes***
* Cypress has inbuilt retry.
* Cypress default timeout is 4s.
* It won't retry interactive command such as ```.click()``` and ```.type()```
* It only retries failed command until it reaches the default timeout and the test fails

***Handling Special Characters in Cypress***

```.type('{Enter}'); -> resembles hitting enter key```

Example:
``` cy.get('input').type('This is how we hit enter {Enter}');```

<img width="801" alt="test_files" src="https://user-images.githubusercontent.com/5984252/81999800-1affcd80-960b-11ea-8223-86a78ddcc4ca.png">
