/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Global Variables
/**
const startGameBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keyboardBtns = keyboard.querySelectorAll('button[class = "key"]');
const phraseDiv = document.querySelector('#phrase');
const phraseUL = phraseDiv.querySelector('ul');
*/
//Event Listeners
startGameBtn.addEventListener('click', ()=>{
    const newGame = new Game;
    newGame.startGame();
});

keyboardBtns.forEach(button=>{
    button.addEventListener('click', (e)=>{
       // newGame.handleInteraction();

    });
});