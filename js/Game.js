/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    //we will have to pass the updated values in as arguements - possibly
    constructor(){
        this.missed = 0; 
        this.phrases = ['hello world','beatiful day','im karla','did you guess','great work']; 
        this.activePhrase = null;
    }
    startGame(){
        //hide start screen overlay
        const startScreenOverlay = document.querySelector('#overlay');
        startScreenOverlay.style.display = 'none';

        //calls get getrandomPhrase() method
        this.activePhrase = getRandomPhrase();

        //adds that phrase to the board by calling the addPhraseToDisplay() method on the activePhrase property.
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase;
    }

    handleInteraction(){}
    removeLife(){}
    checkForWin(){}
    gameOver(){}
}

const newGame = new Game();
