describe('template spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('navbar drop to link', () => {
      cy.get("#dropdownMenuButton1").click()
      cy.get('.dropdown-menu').within(() => {
        cy.get('[test-data="dropsLink"]').click()
      });
      cy.url().should('eq', 'http://localhost:5173/drops');

      cy.get("#selectCustome").should('exist').select("Option 2").should('have.value', "option2");

      cy.get('[test-data="atag"').click();

      cy.origin('https://www.wikipedia.org/', () => {
      cy.get('.central-textlogo__image').should('contain', 'Wikipedia');
      cy.get("#searchInput").type('Delhi')
      cy.get('.suggestion-title').contains('Delhi University').click()
      });
    });


  
    it.only('drop google', () => {
      cy.visit('http://localhost:5173/drops');
      cy.get('[test-data="google"]').click()

      cy.origin('https://www.google.com/', () => {
        cy.get("textarea[name='q']").type('cypress automation')

        cy.get('div.wM6W7d>span').should('have.length', 12)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
          if($el.text()=='cypress automation tool'){
            cy.wrap($el).click({ force: true, retryOn: { timeout: 10000 } });
          }
        })

        cy.get("textarea[name='q']").should('have.value', 'cypress automation tool')
      });
    });
  });