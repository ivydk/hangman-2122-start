console.log("it's working");

// Global variables
const arrayWithWords: string[] = ['hallo', 'appel', 'okeej', 'aandacht', 'welkom', 'scooters'];
const word: string = randomWord(arrayWithWords);
const charsInWord: string[] = word.split('', word.length);
const guessedCharactersInWord: string[] = [];
charsInWord.forEach(() => {
  guessedCharactersInWord.push('_');
});
console.log(guessedCharactersInWord);

let attempts = 6;

/**
 * Function to initialize the programme
 */
function init() {
  // write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
  // write the dashes to the DOM
  addDashes();
  // write total of attempts in the DOM
  addAttempsToTheDOM(attempts);
  console.log(word);
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  // let currenkey: string;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const keyboard: HTMLDivElement = document.querySelector('#keyboard');
  alphabet.forEach((element) => {
    const divKey: HTMLDivElement = document.createElement('div');
    divKey.id = element;
    divKey.classList.add('key');
    divKey.innerHTML = element;
    keyboard.append(divKey);

    divKey.addEventListener('click', () => {
      // voeg toe aan guessedLetterToDOM, guessLetter functie aanmaken?
      console.log(element);

      // maak hier even een functie van :)
      // is char in the word, on witch index

      if (inArray(element, charsInWord)) {
        // add char on right index
        console.log('yess');
        charOnWichIndex(charsInWord, element);
        // add this letter to the dom
      } else {
        // als het de verkeerde letter is
        attempts -= 1;
        addAttempsToTheDOM(attempts);
      }
    });
  });
}

/**
 * checks op welke index de chars zijn en zet deze in de DOM
 *
 * @param array array die je wilt checken
 * @param char welke char je wilt controleren
 */
function charOnWichIndex(array: string[], char: string) {
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

/**
 * checkt of een bepaalde char in de string zit.
 *
 * @param char de char die je wilt cheken
 * @param array je wilt weten of de char in deze array zit
 * @returns boolean die aangeeft of de char in de array zit of niet
 */
function inArray(char: string, array: string[]) {
  const count = array.length;
  for (let i = 0; i < count; i += 1) {
    if (array[i] === char) {
      return true;
    }
  }
  return false;
}

/**
 * vind een random nummer
 *
 * @param min
 * @param max
 * @returns
 */
function randomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * finds a random word in a array with strings
 * @param array the array with strings
 * @returns returns a random element from a array
 */
function randomWord(array: string[]): string {
  const randomWordFromArray = arrayWithWords[randomNumber(0, array.length - 1)];
  return randomWordFromArray;
}

/**
 * deze functie maakt li item aan onder het ul #letters element in de DOM en zet het aantal
 * dashes op je beeldscherm
 */
function addDashes() {
  // eslint-disable-next-line prefer-destructuring
  const length = charsInWord.length;
  const listWithLetters = document.querySelector('#letters');

  for (let i = 0; i < length; i += 1) {
    const listItem: HTMLElement = document.createElement('li');
    listItem.setAttribute('id', `char${i}`);
    listWithLetters.appendChild(listItem).innerHTML = '_';
    // guessedChars.push('_');
  }
}

/**
 * verandert een dash uit de li items #char... naar een letter
 *
 * @param charIndex hoeveelste letter (begint bij 0)
 * @param guessedLetter welke letter er hier komt te staan
 */
function addGuessedLetterToDOM(charIndex: number) {
  document.querySelector(`#char${charIndex}`).innerHTML = charsInWord[charIndex];
  // guessedChars[charIndex] = charsInWord[charIndex];
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

window.addEventListener('load', init);
