/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * Game class
 * @constructor {none} - sets initial values for game
 * @startGame {none} - removes overlay screen and gets a random phrase to display to our game
 * @getRandomPhrase {none} - gets a random phrase from the this.phrases array
 * @handleInteraction {none} - checks to see what key the user clicked and takes action depending if the letter was correct or not
 * @checkForWin {none} - if a user gets all the letters in the phrase, we return true, otherwise we return false
 * @removeLife {none} - if a user selects a letter that is not in our phrase, we remove a life from the screen
 * @gameOver {none} - if a user wins or loses, we call game over and show them their outcome
 */

class Game{
    constructor(){
        this.missed = 0; 
        this.phrases = [new Phrase('hello world'), new Phrase('beautiful day'), new Phrase('did you guess'), new Phrase('great work'), new Phrase('amazing job')];
        this.activePhrase = null; 
    }
    startGame(){
        startScreenOverlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase;
    }

    handleInteraction(){
        keyClicked.disabled = true;
        const keyClickedContent = keyClicked.textContent;

        const characters = this.activePhrase.phrase.split('');
        const lowerCaseRegex = /[a-z]/;
        const letters = characters.filter(character => lowerCaseRegex.test(character));

        if(!letters.includes(keyClickedContent)){
            keyClicked.classList.add('wrong');
            this.removeLife();
        }else{
            keyClicked.classList.add('chosen');
            this.activePhrase.showMatchedLetter();
            if(this.checkForWin()){
                keyboardBtns.forEach(button =>{button.disabled = true});
                setTimeout(()=>{this.gameOver()}, 700);
            }
        }
    }
    
    checkForWin(){
        const lettersDisplayed = phraseDiv.querySelectorAll('li.letter');
        const lettersShown = phraseDiv.querySelectorAll('li.letter.show');
        if(lettersDisplayed.length === lettersShown.length){
            return true;
        }else{
            return false;
        }
    }

    removeLife(){ 
        const scoreboard = document.querySelector('#scoreboard');
        const livesNodeList = scoreboard.querySelectorAll('img[src = "images/liveHeart.png"]');
        const lastNodeElement = livesNodeList[livesNodeList.length -1];

        if(this.missed >= 4){
            keyboardBtns.forEach(button =>{button.disabled = true});
            this.gameOver();
        }else{
            lastNodeElement.setAttribute('src', 'images/lostHeart.png');
            this.missed += 1;
        }
    }

    gameOver(){
        startScreenOverlay.style.display = 'block flex';
        if(this.checkForWin()){
            startScreenOverlay.className = 'win';
            gameOverMessage.innerHTML = 'You win!';
            startScreenOverlay.querySelector('button').innerHTML = 'Play Again!';
        }else{
            startScreenOverlay.className = 'lose';
            gameOverMessage.innerHTML = 'Sorry, you lost. Try again next time!';
            startScreenOverlay.querySelector('button').innerHTML = 'Play Again!';
        }
        phraseUL.innerHTML = '';
        keyboardBtns.forEach(button=>{
            button.disabled = false;
            button.className = 'key';
        });
        const scoreboard = document.querySelector('#scoreboard');
        const livesNodeList = scoreboard.querySelectorAll('img');
        livesNodeList.forEach(node =>{
            node.setAttribute('src', 'images/liveHeart.png');
        });
        this.missed = 0;
    }
}

