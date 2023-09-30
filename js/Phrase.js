/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
        const phraseDiv = document.querySelector('#phrase');
        const phraseUL = phraseDiv.querySelector('ul');
        const letters = this.phrase.split('');
        const htmlLetterElements = letters
            .map(letter=>{
                const lowerCaseRegex = /[a-z]/;
                const spaceRegex = / /;
                if(lowerCaseRegex.test(letter)){
                    return `<li class="hide letter ${letter}">${letter}</li>`;
                }else if(spaceRegex.test(letter)){
                    return `<li class="space">${letter}</li>`;
                }
            });
        htmlLetterElements.forEach(element => phraseUL.insertAdjacentHTML('beforeend', element));
    }
    
    checkLetter(){} //checks to see if the letter selected by the player matches a letter in the phrase.
    showMatchedLetter(){} //reveals the letter(s) on the board that matches the player's selection
}
