console.log("it's working");
const arrayWithWords = ['hallo', 'appel', 'okeej', 'aandacht', 'welkom', 'scooters'];
const word = randomWord(arrayWithWords);
const charsInWord = word.split('', word.length);
const guessedCharactersInWord = [];
charsInWord.forEach(() => {
    guessedCharactersInWord.push('_');
});
console.log(guessedCharactersInWord);
let attempts = 6;
function init() {
    writeAlphabetToTheDom();
    addDashes();
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
        divKey.addEventListener('click', () => {
            console.log(element);
            if (inArray(element, charsInWord)) {
                console.log('yess');
                charOnWichIndex(charsInWord, element);
            }
            else {
                attempts -= 1;
                addAttempsToTheDOM(attempts);
            }
        });
    });
}
function charOnWichIndex(array, char) {
    let index = 0;
    array.forEach(() => {
        if (array[index] === char) {
            guessedCharactersInWord[index] = char;
            console.log(guessedCharactersInWord);
            addGuessedLetterToDOM(index);
        }
        index += 1;
    });
}
function inArray(char, array) {
    const count = array.length;
    for (let i = 0; i < count; i += 1) {
        if (array[i] === char) {
            return true;
        }
    }
    return false;
}
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomWord(array) {
    const randomWordFromArray = arrayWithWords[randomNumber(0, array.length - 1)];
    return randomWordFromArray;
}
function addDashes() {
    const length = charsInWord.length;
    const listWithLetters = document.querySelector('#letters');
    for (let i = 0; i < length; i += 1) {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', `char${i}`);
        listWithLetters.appendChild(listItem).innerHTML = '_';
    }
}
function addGuessedLetterToDOM(charIndex) {
    document.querySelector(`#char${charIndex}`).innerHTML = charsInWord[charIndex];
}
function addAttempsToTheDOM(numberOfAttempts) {
    document.querySelector('#attempt').innerHTML = numberOfAttempts.toString();
}
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map