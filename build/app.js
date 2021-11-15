console.log("it's working");
const arrayWithWords = ['hallo', 'appel', 'okeej'];
const word = randomWord(arrayWithWords).split('');
let attempts = 0;
let guessedCharactersInWord;
let dashes;
let guessedLettersInWord;
function init() {
    writeAlphabetToTheDom();
    addDashes();
    addGuessedLetterToDOM(4);
    addAttempsToTheDOM(attempts);
    console.log(word);
}
function writeAlphabetToTheDom() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyboard = document.querySelector('#keyboard');
    alphabet.forEach((element) => {
        const divKey = document.createElement('div');
        divKey.id = element;
        divKey.classList.add('key');
        divKey.innerHTML = element;
        keyboard.append(divKey);
    });
}
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
window.addEventListener('load', init);
function randomWord(array) {
    const randomWord = array[Math.floor(Math.random() * array.length)];
    return randomWord;
}
function addDashes() {
    const length = word.length;
    const listWithLetters = document.querySelector('#letters');
    for (let i = 0; i < length; i += 1) {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', `char${i}`);
        listWithLetters.appendChild(listItem).innerHTML = '_';
    }
}
function addGuessedLetterToDOM(charIndex) {
    document.querySelector(`#char${charIndex}`).innerHTML = word[charIndex];
}
function addAttempsToTheDOM(numberOfAttempts) {
    document.querySelector('#attempt').innerHTML = numberOfAttempts.toString();
}
//# sourceMappingURL=app.js.map