console.log("it's working");

// Global variables

const arrayWithWords: string[] = ['hallo', 'appel', 'okeej'];

const word: string[] = randomWord(arrayWithWords).split('');

let attempts = 0;

let guessedCharactersInWord: number;

let dashes: string;

let guessedLettersInWord: string;

/**
 * Function to initialize the programme
 */
function init() {
  // write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();

  // write the dashes to the DOM
  addDashes();

  // chanhes a guessed letter in the DOM
  addGuessedLetterToDOM(4);

  // write the attempts to the DOM
  addAttempsToTheDOM(attempts);

  console.log(word)
}


/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const keyboard: HTMLDivElement = document.querySelector('#keyboard');
  alphabet.forEach((element) => {
    const divKey: HTMLDivElement = document.createElement('div');
    divKey.id = element;
    divKey.classList.add('key');
    divKey.innerHTML = element;
    keyboard.append(divKey);
  });
}

/**
 * nn
 * .
 * @param min
 * @param max
 * @returns
 */
function randomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

window.addEventListener('load', init);

/**
 * finds a random word in a array with strings
 * @param array the array with strings
 * @returns returns a random element from a array
 */
function randomWord(array: string[]): string {
  const randomWord = array[Math.floor(Math.random() * array.length)];
  return randomWord
}

/**
 * deze functie maakt li item aan onder het ul #letters element in de DOM en zet het aantal
 * dashes op je beeldscherm
 */
function addDashes() {
  // eslint-disable-next-line prefer-destructuring
  const length = word.length;
  const listWithLetters = document.querySelector('#letters');

  for (let i = 0; i < length; i += 1) {
    const listItem: HTMLElement = document.createElement('li');
    listItem.setAttribute('id', `char${i}`);
    listWithLetters.appendChild(listItem).innerHTML = '_';
  }
}

/**
 * verandert een dash uit de li items #char... naar een letter
 *
 * @param charIndex hoeveelste letter (begint bij 0)
 * @param guessedLetter welke letter er hier komt te staan
 */
function addGuessedLetterToDOM(charIndex: number) {
  document.querySelector(`#char${charIndex}`).innerHTML = word[charIndex];
}

/**
 * zet het aantal pogingen in de DOM
 *
 * @param numberOfAttempts het aantal keer dat er al geraden is
 */
function addAttempsToTheDOM(numberOfAttempts: number) {
  document.querySelector('#attempt').innerHTML = numberOfAttempts.toString();
}

// function addClickEvent() {

// }

