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


// keyboardBtns.addEventListener('keyup', (e)=>{
//     const lowerCaseRegex = /[a-z]/;
//     if(lowerCaseRegex.test(e.key)){
//         console.log(e.target);
//         console.log(e.key);
//     }
    
// })



