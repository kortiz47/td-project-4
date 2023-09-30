/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(missed, activePhrase){
        this.missed = missed; //used to track the number of missed guesses by the player
        this.phrases = ['hello world','beatiful day','how are you','did you guess','great work']; //an array of five Phrase objects to use with the game
        this.activePhrase = activePhrase; //the Phrase object that’s currently in play
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