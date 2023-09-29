class InputTest{

    InputTitle = 'input[name="title"]'
    inputBody = 'input[name="body"]'
    dataModal = '[test-data="modal"]'
    modalTitle = '[test-data="modalTtile"]'



    visit(){
        cy.visit('http://localhost:5173/login2');
    }

    cleanConsole(){
        cy.window().then((win) => {
            win.console.clear();
          });
    }

    typeInputTitle(title){
        cy.get(this.InputTitle).type(title);
        cy.get(this.InputTitle).should("have.value", title)
    }

    typuInputBody(body){
        cy.get(this.inputBody).type(body);
        cy.get(this.inputBody).should("have.value", body)
    }

    makePostRequest(){
        cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts').as('apiCall');
    }

    modalShoudNotBeVisible(){
        cy.get(this.dataModal).should('not.be.visible');
    }

    clickButton(){
        cy.get('[test-data="sendButton"]').click();
    }

    interceptionPostRe(){
        cy.wait('@apiCall').then((interception) => {
            // Check the response status code and any other assertions you need
            expect(interception.response.statusCode).to.equal(201); // Adjust the status code as needed
            // Add more assertions as required
          });
    }

    modalOpen(){
        cy.get(this.dataModal).should('be.visible');
        cy.get(this.modalTitle).should('contain', 'MODAL HAVE OPEN');
    }

}

export default InputTest