// Assignment Code. Assigns variable to the generate button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. Function to execute when the generate button is pressed.
function writePassword() {
  // Prompt for password length, check for correct input. If length entered is within the range 8 to 128 and is a
  // whole, numeric value it is stored. Otherwise user is prompted to re-enter.
  var checkLength;
  var passwordLength;
  while (!checkLength) {
    if ((passwordLength % 1 === 0) && (passwordLength >= 8) && (passwordLength <= 128)) {
      passwordLength = +passwordLength;
      checkLength = true;
    }
    else {
      passwordLength = prompt('Please enter a password length, as a whole number, between 8 and 128.');
    }
  }
  // Other password criteria, with a similar input check as above.
  var checkCriteria;
  var passwordLower = confirm('Should the password contain lower case letters?');
  var passwordUpper = confirm('Should the password contain upper case letters?');
  var passwordNumber = confirm('Should the password contain numbers?');
  var passwordSpecial = confirm('Should the password contain special characters?');
  while (!checkCriteria) {
    if ((passwordLower == true) || (passwordUpper == true) || (passwordNumber == true) || (passwordSpecial == true)) {
      checkCriteria = true;
    }
    else {
      alert('You must select at least one character type to generate a password.');
      passwordLower = confirm('Should the password contain lower case letters?');
      passwordUpper = confirm('Should the password contain upper case letters?');
      passwordNumber = confirm('Should the password contain numbers?');
      passwordSpecial = confirm('Should the password contain special characters?');
    }
  }

  function generatePassword(length, lower, upper, number, special) {
    var genPassword = '';
    var passwordCriteria = [];
    if (lower == true) {
      genPassword += randomLowerLetter();
      passwordCriteria.push('lower');
    }
    if (upper == true) {
      genPassword += randomUpperLetter();
      passwordCriteria.push('upper');
    }
    if (number == true) {
      genPassword += randomNumber();
      passwordCriteria.push('number');
    }
    if (special == true) {
      genPassword += randomSpecialCharacter();
      passwordCriteria.push('special');
    }
    var remainingLength = length - genPassword.length;
    for (i = 0; i < remainingLength; i++) {
      var whichRandomChar = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
      if (whichRandomChar == 'lower') {
        genPassword += randomLowerLetter();
      }
      else if (whichRandomChar == 'upper') {
        genPassword += randomUpperLetter();
      }
      else if (whichRandomChar == 'number') {
        genPassword += randomNumber();
      }
      else if (whichRandomChar == 'special') {
        genPassword += randomSpecialCharacter();
      }
    }
  }


  // The result of the generatePassword function is stored as variable password. Then the text area element is assigned to
  // passwordText, and the value of that is set equal to variable password.
  var password = generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumber, passwordSpecial);
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

}

// Add event listener to generate button.
// When the generate button is clicked, call writePassword function.
generateBtn.addEventListener("click", writePassword);

// The following functions serve to return a random lower case, upper case, number, or special character, respectively.
function randomLowerLetter() {
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  return lowers[Math.floor(Math.random() * lowers.length)];
}
function randomUpperLetter() {
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppers[Math.floor(Math.random() * uppers.length)];
}
function randomNumber() {
  var numbers = '0123456789';
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function randomSpecialCharacter() {
  var specials = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', 
  '/', ':', ';', '<', '=', '>','?', '@', '[', '\\', ']',  '^', '_', '`', '{', '|', '}', '~'];
  return specials[Math.floor(Math.random() * specials.length)];
}