let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

let randolower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randoupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let randonumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let randosymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "}", "]", ";", ":"]

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

  const charTypesArray = [];

  let pwLength = parseInt(prompt('How long would you like your password to be? (enter character count 8-128)'));
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || pwLength === null) {
    alert("You've chosen an invalid response. Please try again!");
    generatePassword();
  }
  else {
    let pwLowerCase = confirm('Would you like to include lower case characters?');
    if (pwLowerCase === true) {
      charTypesArray.push(randolower)
    }
    let pwUpperCase = confirm('Would you like to include upper case characters?');
    if (pwUpperCase === true) {
      charTypesArray.push(randoupper)
    }
    let pwNumbers = confirm('Would you like to include numbers?');
    if (pwNumbers === true) {
      charTypesArray.push(randonumber)
    }
    let pwSpecial = confirm('Would you like to include special characters?');
    if (pwSpecial === true) {
      charTypesArray.push(randosymbol)
    }

    if (pwLowerCase === false && pwUpperCase === false && pwNumbers === false && pwSpecial === false) {
      alert("You must select at least one character type. Please refresh the page and try again!");
    }

    let generatedPassword = "";

    while (generatedPassword.length < pwLength) {
      for (let i = 0; i < charTypesArray.length; i++) {
        if (generatedPassword.length < pwLength) {
          let rando = Math.floor(Math.random() * charTypesArray[i].length)
          generatedPassword += charTypesArray[i][rando]
        }
      }
    }

    passwordText.value = generatedPassword;

  }
}