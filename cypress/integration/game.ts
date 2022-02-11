//cypress
export class Game {


    navigateToGame = () => {
        // On Live
       /*  cy.visit('https://codepen.io/CalendlyQA/full/KKPQLmV', {
            failOnStatusCode: false
        }) */
        // locally
         cy.visit('http://127.0.0.1:5500', {
            failOnStatusCode: false
        })
    };

    enterNumber = (number: string) => {
        cy.get('#number').clear().type(number)
    };

    clickOnPlay = () => {
        cy.get('#start').click();
    };

    userPlaysIn = (id: string) => {
        cy.get(`#${id}`).then((el) =>{
            if(el.text() == ''){
                cy.wrap(el).click()
            }
        })
    }

    
}