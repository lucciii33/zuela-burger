describe('screnshoot', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('screenshots manual and automaticly', () => {
    
        cy.get('[data-test="verMenu"]').click();
        cy.get('h1').then(($h1) => {  
            const h1Element = $h1[0];
            cy.wrap(h1Element).should(($element) => {
                expect($element.innerText).to.include('Burgers');
              });
          });
        cy.go("back")
        cy.get('[data-test="homepage-1"]').should('have.text', 'Bienvenidos a Blue burger')
        cy.go(1)
        cy.get('h1').then(($h1) => {  
            const h1Element = $h1[0];
            cy.wrap(h1Element).should(($element) => {
                expect($element.innerText).to.include('Burgers');
              });
          });
          cy.go("back")
          cy.get('[data-test="homepage-1"]').should('have.text', 'this is wrong')
        //   cy.screenshot('screenshots/manual-screenshot-homepage');

    });


  
  });