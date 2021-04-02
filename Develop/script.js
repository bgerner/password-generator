// const passwordElement = document.getElementById('password');
// const generateElement = document.getElementById('generate');

const rando = {
  lower: randomLowerCase(),
  upper: randomUpperCase(),
  number: randomNumber(),
  symbol: randomSymbol(),
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

function generatePassword () {

  const charOptionsArray = [];

  var pwLength = parseInt(prompt('How long would you like your password to be? (enter character count 8-128)'));
    if (pwLength < 8 || pwLength > 128 || typeof(pwLength) != "number"|| pwLength === null) {
      alert("You've chosen an invalid response. Please try again!");
      generatePassword();
    }
  var pwLowerCase = confirm('Would you like to include lower case characters?');
    if (pwLowerCase === true) {
      charOptionsArray.push(rando.lower)
    }
  var pwUpperCase = confirm('Would you like to include upper case characters?');
  if (pwUpperCase === true) {
    charOptionsArray.push(rando.upper)
  }
  var pwNumbers = confirm('Would you like to include numbers?');
  if (pwNumbers === true) {
    charOptionsArray.push(rando.number)
  }
  var pwSpecial = confirm('Would you like to include special characters?');
  if (pwSpecial === true) {
    charOptionsArray.push(rando.symbol)
  }

  let writtenPassword = '';
  
  const typesCount = rando.lower + rando.upper + rando.number + rando.symbol;

  if(typesCount === 0) {
    return '';
  }

  // length is character count from prompt
  for (let i = 0; i < pwLength; i++) {

    const typesArray = [rando.lower, rando.upper, rando.number, rando.symbol].filter
      (item => Object.values(item)[0]);

    typesArray.forEach(type => {
      const randoName = Object.keys(type)[0];

      var randomCharacter = typesArray[(Math.floor(Math.random() * typesArray.length))];

      writtenPassword += randomCharacter;

      console.log(writtenPassword);

    });
    
  }
  return writtenPassword
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

  return password;

}
