/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Global Variables
const startGameBtn = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keyboardBtns = keyboard.querySelectorAll('button[class = "key"]');
const phraseDiv = document.querySelector('#phrase');
const phraseUL = phraseDiv.querySelector('ul');


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
        //creates a new array that only contains the letters(not spaces) of the phrase chosen
        const characters = this.phrase.split('');
        const lowerCaseRegex = /[a-z]/;
        const letters = characters.filter(character => lowerCaseRegex.test(character));
        
        //event listener for each qwerty key and checks to see if the letter selected by the player matches a letter in the phrase.
        keyboardBtns.forEach(button=>{
            button.addEventListener('click', (e)=>{
                const key = e.target.textContent;
                if(letters.includes(key)){
                    const matchedKey =  key;
                    this.showMatchedLetter(matchedKey);
                }
            });
        });
    } 
    showMatchedLetter(matchedKey){
        const selectedKeys = phraseUL.querySelectorAll(`.${matchedKey}`);
        selectedKeys.forEach(selectedKey =>{
            selectedKey.classList.remove('hide');
            selectedKey.classList.add('show');
        });
        
    }
}

const testPhrase = new Phrase('hi im karla');
testPhrase.addPhraseToDisplay();
testPhrase.checkLetter();