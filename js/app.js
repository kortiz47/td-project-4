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
})







