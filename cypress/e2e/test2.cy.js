describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
        // Clear any previous console logs to start with a clean slate
        cy.window().then((win) => {
          win.console.clear();
        });
      });
    it('TEST1  2', () => {
        cy.window().then((win) => {
            cy.spy(win.console, 'log');
          });

        cy.get('[test-data="linkToAbout"] [test-datatype="register"]').click();

        cy.get('input[name="firstName"]').type("John");
        cy.get('input[name="firstName"]').should("have.value", "John")

        cy.get('input[name="lastName"]').type("Doe");
        cy.get('input[name="lastName"]').should("have.value", "Doe")

        cy.get('input[name="email"]').type("JohnDoe@gmail.com");
        cy.get('input[name="email"]').should("have.value", "JohnDoe@gmail.com")

        cy.get('input[name="password"]').type("password");
        cy.get('input[name="password"]').should("have.value", "password")

        cy.get('[test-data="sendButton"]').click()

         cy.window().then((win) => {
            expect(win.console.log).to.be.calledWith('working fine');
        });
    })
   
    
    
  })