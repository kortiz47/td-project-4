/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



//Event Listeners

//creates new instance of Game object
const newGame = new Game;

//starts the game when start button is clicked
startGameBtn.addEventListener('click', ()=>{
    newGame.startGame();
});

//listens for on screen keyboard clicks and runs the handleInteraction function on newGame object
keyboardBtns.forEach(button=>{
    button.addEventListener('click', (e)=>{
        keyClicked = e.target; 
        newGame.handleInteraction();
    });
});

//listems for keyboard keyup events to handle the same game functionality as clicking on screen
document.addEventListener('keyup', (e)=>{
    const lowerCaseRegex = /[a-z]/;
    if(startScreenOverlay.style.display === 'none'){
        if(lowerCaseRegex.test(e.key)){
            for(let i=0; i<keyboardBtns.length; i++){
                if(keyboardBtns[i].textContent === e.key){
                    keyClicked = keyboardBtns[i];
                    newGame.handleInteraction();
                }
            }
        }
    }
});








