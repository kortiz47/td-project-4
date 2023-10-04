/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Global Variables
let keyClicked;

const startGameBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keyboardBtns = keyboard.querySelectorAll('button[class = "key"]');
const phraseDiv = document.querySelector('#phrase');
const phraseUL = phraseDiv.querySelector('ul');
const startScreenOverlay = document.querySelector('#overlay');
const gameOverMessage = document.querySelector('#game-over-message');


/**
 * Phrase class
 * @constructor {string} - takes in a string as an arguement
 * @addPhraseToDispaly {none} - uses the phrase passed into the constructor, splits it into an array, and appends the html elements to the page
 * @checkLetter {none} - checks to see if a letter clicked by user exists within the phrase and returns the letter if true and false if not
 * @showMatchedLetter {} - if a letter exists in the phrase it is shown to user
 */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const characters = this.phrase.split('');
        const htmlCharacterElements = characters
            .map(character=>{
                const lowerCaseRegex = /[a-z]/;
                const spaceRegex = / /;
                if(lowerCaseRegex.test(character)){
                    return `<li class="hide letter ${character}">${character}</li>`;
                }else if(spaceRegex.test(character)){
                    return `<li class="space">${character}</li>`;
                }
            });
        htmlCharacterElements.forEach(element => phraseUL.insertAdjacentHTML('beforeend', element));
    }
    
    checkLetter(){
        const characters = this.phrase.split('');
        const lowerCaseRegex = /[a-z]/;
        const letters = characters.filter(character => lowerCaseRegex.test(character));
        const key = keyClicked.textContent;
        if(letters.includes(key)){
            this.showMatchedLetter(key);
        }else{
            return false;
        }
    } 

    showMatchedLetter(){
        const selectedKeys = phraseUL.querySelectorAll(`.${keyClicked.textContent}`);
        selectedKeys.forEach(selectedKey =>{
            selectedKey.classList.remove('hide');
            selectedKey.classList.add('show');
        });
        
    }
    
}

