import InputTest from "../pageModel/InputTeting";

describe('object page testing', () => {
    beforeEach(() => {
       
      });
    
      it('TEST  4 object page', () => {
         const objectTestInfo = new InputTest
         cy.fixture('dataInput').then((data)=>{

          objectTestInfo.visit()
          objectTestInfo.cleanConsole()
          objectTestInfo.typeInputTitle(data.title)
          objectTestInfo.typuInputBody(data.body)
          objectTestInfo.makePostRequest()
          objectTestInfo.modalShoudNotBeVisible()
          objectTestInfo.clickButton()
          objectTestInfo.interceptionPostRe()
          objectTestInfo.modalOpen()

         })
        

    })
   
    
  })