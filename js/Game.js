/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    //we will have to pass the updated values in as arguements - possibly
    constructor(){
        this.missed = 0; 
        this.phrases = ['hello world','beatiful day','im karla','did you guess','great work']; 
        this.activePhrase = null; //set to newPhraseObject 
    }
    startGame(){
        const startScreenOverlay = document.querySelector('#overlay');
        startScreenOverlay.style.display = 'none';

        const randomPhrase = this.getRandomPhrase();
        const newPhraseObject = new Phrase(`${randomPhrase}`);
        this.activePhrase = newPhraseObject;
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase;
    }

    handleInteraction(){
        const characters = this.activePhrase.phrase.split('');
        const lowerCaseRegex = /[a-z]/;
        const letters = characters.filter(character => lowerCaseRegex.test(character));
        keyboardBtns.forEach(button =>{
            button.addEventListener('click', (e)=>{
                const target = e.target;
                target.disabled = true;
                const key = e.target.textContent;
                if(!letters.includes(key)){
                    target.classList.add('wrong');
                    this.removeLife();
                }else{
                    console.log(this.activePhrase);
                    target.classList.add('chosen');
                    this.activePhrase.showMatchedLetter();
                    //call checkforWin
                        //if player won game call gameOver method
                }
            });
        });
    }
    removeLife(){

    }
    checkForWin(){

    }
    gameOver(){

    }
}

const newGame = new Game();
