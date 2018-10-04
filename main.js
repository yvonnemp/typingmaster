window.addEventListener('load', init);

// Globals

// Available Levels

const levels = {
	easy: 5,
	medium: 3,
	hard: 2
}

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Variable

const words = [
    'mississippi',
    'select',
    'horrendous',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'echo',
    'revolver',
    'javascript',
    'outside',
    'working',
    'developer',
    'education',
    'establishment',
    'stubborn',
    'statue',
    'studio',
    'cocktail',
    'symptom',
    'student',
    'doubt',
    'subscribed',
    'nutrition',
    'acknowledge',
    'learned',
    'genius'
];

// INIT initializing game

function init() {
	// show number of seconds in UI
	seconds.innerHTML = currentLevel;

    // Load word from array
    showWord(words);

    // start matching word input
    wordInput.addEventListener('input', startMatch);

    //Call Countdown
    setInterval(countdown, 1000);

    // Check game status
    setInterval(checkStatus, 50);
}

//Start Match
function startMatch() {
    if (matchWords()) {
    	isPlaying = true;
    	time = currentLevel + 1;
    	showWord(words);
    	wordInput.value = '';
    	score++;
    }

    if (score=== -1) {
    	scoreDisplay.innerHTML = 0;
    } else {
    	scoreDisplay.innerHTML = score;
    }
}


// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'CORRECT!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }

}

// Pick & Show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// Countdown Timer

function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    } else if (time == 0) {
        isPlaying = false;
    }
    // Show time

    timeDisplay.innerHTML = time;
}

// Check game status

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'GAME OVER!!'
        score = -1;
    }
}