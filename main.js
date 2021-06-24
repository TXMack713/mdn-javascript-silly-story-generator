// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let usTempNumber = 94 // fahrenheit outside
let usTempString = usTempNumber + ' fahrenheit';

let ukTempNumber = usTempNumber * (5 / 9) - 32;
let ukTempString = ukTempNumber + ' celcius';

// Array for the inserted names
let specialPerson = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

// Array for the random destinations
let destination = ['the soup kitchen', 'Disneyland', 'the White House'];

// Array for the random events
let randomEvent = ['spontaneously combusted', 'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'];

let story = `It was ${usTempString} outside, so ${specialPerson[i]} went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}