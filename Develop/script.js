//DOM elements
const passwordElement = document.getElementById('password');
const generateElement = document.getElementById('generate');

const randos = {
  lower: randomLowerCase,
  upper: randomUpperCase,
  number: randomNumber,
  symbol: randomSymbol,
}

function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = '`~!@#$%^&*()-_=+[{]}\|;:",<.>/?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {

  prompt('How long would you like your password to be? (enter character count 8-128)')
  confirm('Would you like to include lower case characters?');
  confirm('Would you like to include upper case characters?');
  confirm('Would you like to include numbers?');
  confirm('Would you like to include special characters?');

  let writtenPassword = '';
  
  const typesCount = lower + upper + number + symbol;
  
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }
  // length is character count from prompt
  for (let i = 0; i < length; i+= typesCount) {
    typesArray.forEach(type => {
      const randoName = Object.keys(type)[0];

      writtenPassword += randos[randoName]();

    });  
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return writtenPassword;

}
