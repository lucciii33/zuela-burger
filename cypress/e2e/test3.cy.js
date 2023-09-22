describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/login2');
        // Clear any previous console logs to start with a clean slate
        cy.window().then((win) => {
          win.console.clear();
        });
      });
    
      it('TEST1  3', () => {
        cy.window().then((win) => {
            cy.spy(win.console, 'log');
          });

          cy.get('input[name="title"]').type("any title here");
          cy.get('input[name="title"]').should("have.value", "any title here")

          cy.get('input[name="body"]').type("A12345M");
          cy.get('input[name="body"]').should("have.value", "A12345M")

          cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts').as('apiCall'); // Replace with your actual API endpoint

          cy.get('[test-data="modal"]').should('not.be.visible');

          cy.get('[test-data="sendButton"]').click();
      
          // Wait for the API call to complete
          cy.wait('@apiCall').then((interception) => {
            // Check the response status code and any other assertions you need
            expect(interception.response.statusCode).to.equal(201); // Adjust the status code as needed
            // Add more assertions as required
          });

          cy.get('[test-data="modal"]').should('be.visible');
          cy.get('[test-data="modalTtile"]').should('contain', 'MODAL HAVE OPEN');

    })
   
    
  })