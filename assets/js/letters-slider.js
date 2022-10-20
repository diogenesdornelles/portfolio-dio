const letters = "HELLO WORLD".split(""); // set phrase 
const lineLenght = 40; // set number lines
const time = 300; // set time

const numberLetters = letters.length;
let cont = - numberLetters; 

function getNumber() {
  if (cont === (lineLenght - numberLetters + 1)) {
    cont = - numberLetters;
  }
  cont++;
  return cont;
}

function setLetters () {

  const i = getNumber();
  let divInit = i <= 1 ? 1 : i;
  let divFinal = i + numberLetters <= 1 ? 1 : i + numberLetters;
  divFinal = i > 1 ? divFinal : divFinal;
  let range = divFinal - divInit;
  let divs = document.querySelectorAll(`.bg-animate > :nth-child(n+${1}):nth-child(-n+${160})`);
  divs.forEach(div => div.innerHTML = '');
  divs = document.querySelectorAll(`.bg-animate > :nth-child(n+${divInit}):nth-child(-n+${divFinal})`);
  console.log(divs)
  for (let j = 1; j <= range ; j++) {
    try {
      divs[range - j].innerHTML = letters[numberLetters - j];}
    catch (e) {
    };
  }
}

setInterval(setLetters, time); 
