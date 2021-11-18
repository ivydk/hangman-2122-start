console.log("it's working");

// Global variables
const arrayWithWords: string[] = ['hallo', 'appel', 'okeej', 'aandacht', 'welkom', 'scooters'];
const guessedCharactersInWord: string[] = [];
let attempts = 6;

/**
 * vind een random nummer
 *
 * @param min minimun of the random nummer
 * @param max maximin of the random nummer
 * @returns random nummer
 */
function randomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * finds a random word in a array with strings
 *
 * @param array the array with strings
 * @returns returns a random element from a array
 */
function randomWord(array: string[]): string {
  const randomWordFromArray = arrayWithWords[randomNumber(0, array.length - 1)];
  return randomWordFromArray;
}

const word: string = randomWord(arrayWithWords);
const charsInWord: string[] = word.split('', word.length);
charsInWord.forEach(() => {
  guessedCharactersInWord.push('_');
});
console.log(guessedCharactersInWord);

/**
 * checks if the arrays are equal
 *
 * @param array1 first array you want to check
 * @param array2 second array you want to check
 * @returns h
 */
function checkIfArrayIsEqual(array1: string[], array2: string[]): boolean {
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
  }
}

/**
 * changes a dach to a li item #char.. to a char
 *
 * @param charIndex hoeveelste letter (begint bij 0)
 */
function addGuessedLetterToDOM(charIndex: number) {
  document.querySelector(`#char${charIndex}`).innerHTML = charsInWord[charIndex];
}

/**
 * puts the attempts in the DOM
 *
 * @param numberOfAttempts het aantal keer dat er al geraden is
 */
function addAttempsToTheDOM(numberOfAttempts: number) {
  document.querySelector('#attempt').innerHTML = numberOfAttempts.toString();
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
 *
 * @param element the char
 */
function whenEvent(element: Event) {
  const target: HTMLElement = element.target as HTMLElement;
  const e = target.getAttribute('id');
  if (inArray(e, charsInWord)) {
    // add char on right index
    charOnWichIndex(charsInWord, e);
    // add this letter to the dom
  } else {
    // als het de verkeerde letter is
    attempts -= 1;
    addAttempsToTheDOM(attempts);
  }
  // class .idle maken
  const listItem: HTMLElement = document.querySelector(`#${e}`);
  listItem.classList.add('idle');

  const wordInDOM: HTMLElement = document.querySelector('#letters');
  const keyboardInDOM: HTMLElement = document.querySelector('#keyboard');
  if (checkIfArrayIsEqual(guessedCharactersInWord, charsInWord)) {
    wordInDOM.classList.add('winner');
    keyboardInDOM.classList.add('idle');
  }
  if (attempts <= 0) {
    wordInDOM.classList.add('lost');
    keyboardInDOM.classList.add('idle');
  }
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

    divKey.addEventListener('click', whenEvent);
  });
}

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

window.addEventListener('load', init);
