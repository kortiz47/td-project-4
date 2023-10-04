/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
                setTimeout(()=>{this.gameOver()}, 1000);
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

        if(this.missed === 4){
            keyboardBtns.forEach(button =>{button.disabled = true});
            setTimeout(()=>{this.gameOver()}, 1000);
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

