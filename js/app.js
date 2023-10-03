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
        console.log(e.target);
        keyClicked = e.target; 
        newGame.handleInteraction();
    });
});


document.addEventListener('keyup', (e)=>{
    const lowerCaseRegex = /[a-z]/;
    if(lowerCaseRegex.test(e.key)){
        
        console.log(keyboardBtns[0]);
        console.log(e.key);
        // keyClicked = e.key;
        // newGame.handleInteraction();
    }
    
})



