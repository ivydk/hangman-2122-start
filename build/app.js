console.log("it's working");
const arrayWithWords = ['hallo', 'appel', 'okeej', 'aandacht', 'welkom', 'scooters'];
const guessedCharactersInWord = [];
let attempts = 6;
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomWord(array) {
    const randomWordFromArray = arrayWithWords[randomNumber(0, array.length - 1)];
    return randomWordFromArray;
}
const word = randomWord(arrayWithWords);
const charsInWord = word.split('', word.length);
charsInWord.forEach(() => {
    guessedCharactersInWord.push('_');
});
console.log(guessedCharactersInWord);
function checkIfArrayIsEqual(array1, array2) {
    let index = 0;
    let counter = 0;
    if (array1.length === array2.length) {
        array1.forEach(() => {
            if (array1[index] === array2[index]) {
                counter += 1;
            }
            index += 1;
        });
    }
    if (counter === array1.length) {
        return true;
    }
    return false;
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
function whenEvent(element) {
    const target = element.target;
    const e = target.getAttribute('id');
    if (inArray(e, charsInWord)) {
        charOnWichIndex(charsInWord, e);
    }
    else {
        attempts -= 1;
        addAttempsToTheDOM(attempts);
    }
    const listItem = document.querySelector(`#${e}`);
    listItem.classList.add('idle');
    const wordInDOM = document.querySelector('#letters');
    const keyboardInDOM = document.querySelector('#keyboard');
    if (checkIfArrayIsEqual(guessedCharactersInWord, charsInWord)) {
        wordInDOM.classList.add('winner');
        keyboardInDOM.classList.add('idle');
    }
    if (attempts <= 0) {
        wordInDOM.classList.add('lost');
        keyboardInDOM.classList.add('idle');
    }
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
        divKey.addEventListener('click', whenEvent);
    });
}
function init() {
    writeAlphabetToTheDom();
    addDashes();
    addAttempsToTheDOM(attempts);
    console.log(word);
}
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map