/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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