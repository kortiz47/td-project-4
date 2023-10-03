/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Event Listeners
const newGame = new Game;

startGameBtn.addEventListener('click', ()=>{
    newGame.startGame();
});

keyboardBtns.forEach(button=>{
    button.addEventListener('click', (e)=>{
        keyClicked = e.target; 
        newGame.handleInteraction();
    });
});
