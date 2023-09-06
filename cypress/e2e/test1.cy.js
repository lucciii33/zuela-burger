describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-test="homepage-1"]').contains("Bienvenidos a Blue burger");
    cy.get('[data-test="homepage-2"]').contains("¡Descubre Blue Burger, la revolución de las hamburguesas! Nuestras Smash Burgers te harán estallar de sabor. ¡Ven y disfruta de lo mejor en hamburguesas!");
    cy.get('[data-test="verMenu"]').click()
    cy.visit('http://localhost:5173/Menu')

    cy.get('[test-data="burgerCars"]').within(() => {
      // Use cy.get() without any selector to get all child divs
      cy.get('.burger-card').should('have.length', 4);
      
    });

    cy.get('[test-data="friedCars"]').within(() => {
      // Use cy.get() without any selector to get all child divs
      cy.get('.burger-card').should('have.length', 4);
      
      
    });

    cy.get('[test-data="burgerCars"]').within(() => {
      // Use cy.get() without any selector to get all child divs
      cy.get('[test-data="buttonColorChange"]').should('have.class', 'blue')
      cy.get('[test-data="buttonColorChange"]').first().click();
      cy.get('[test-data="buttonColorChange"]').should('have.class', 'red')
      
    });

    cy.get('[test-data="linkToAbout"] [test-datatype="actualLink"]').click();

    cy.url().should('include', '/about');

    cy.get('[test-data="historia1"]').contains("Bienvenidos a Blue Burger, el lugar donde los amantes de las hamburguesas encuentran su paraíso culinario. En Blue Burger, nos apasiona crear experiencias gastronómicas únicas y satisfacer los paladares más exigentes.")
    cy.wait(2000)
  })
 
  it('should make a successful API request', () => {
    cy.wait(2000)
    cy.request({
      method: 'GET',
      url: 'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up',
      headers: {
        'X-RapidAPI-Key': 'cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1',
        'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com',
      },
    }).then((response) => {
      // Assert that the response status code is 200
      console.log(response)
      expect(response.status).to.eq(200);
  
      // Access and test the response body or other attributes if needed
      // For example, you can check if the response contains specific data
      expect(response.body.exercises).to.exist;
  
      // You can also call your fetchGet function here and pass the response data
      // fetchGet(response.body.exercises);
      cy.wait(2000)
    });

    cy.visit("http://localhost:5173/about")
    cy.get('[test-data="mapfecth"]').should('have.text', 'Bodyweight');

   

   
  });
  
})