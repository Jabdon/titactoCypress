// cypress in typescript
/// <reference types="cypress" />

import { Game } from "./game"

const game = new Game()

describe('Test suite', () =>{

    before(() =>{
        // go to url
        game.navigateToGame()
    })

    it('Program should not respond to non-number entry', function(){
        //enter a number
        game.enterNumber('test')
        // then click on play
        game.clickOnPlay()
        // assertion: expect no cells
        cy.get('#table td').should('have.length', 0)
    })

    it('Generate a play', function(){
        game.enterNumber('3')
        game.clickOnPlay()
        // assertion: expect 9 cells
        cy.get('#table td').should('have.length', 9)
    })

    it('Log user click', function(){
        // clicking on element with passing id
        game.userPlaysIn('0');
        cy.get('#0').should('have.text', 'X')
        
    })
    it('User turn switches properly', function(){
        game.userPlaysIn('3');
        cy.get('#3').should('have.text', 'O') 

        // play again
        game.userPlaysIn('1');
        cy.get('#1').should('have.text', 'X') 

        game.userPlaysIn('4');
        cy.get('#4').should('have.text', 'O')
    })
    it('Winning a game', function(){
        // player X plays that should win the game
        game.userPlaysIn('2');
        cy.get('#2').should('have.text', 'X')
        // endgame element should show up
        cy.get('#endgame').should('be.visible').and('have.text', `Congratulations player X! You've won. Refresh to play again!`);
        
    })
})