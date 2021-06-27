// Assignment Code. Assigns variable to the generate button.
var generateBtn = document.querySelector("#generate");

// Function writePassword asks for user input for the password criteria, checking for minimum and valid criteria. It passes the
// criteria into function generatePassword and displays the result on screen. Styling change to indicate completion.
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

  // The result of the generatePassword function is stored as variable password. Then the text area element is assigned to
  // passwordText, and the value of that is set equal to variable password.
  var password = generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumber, passwordSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.setAttribute("style", "border-style:solid; border-color:black");
}

// Fucntion generatePassword takes the users password criteria
function generatePassword(length, lower, upper, number, special) {
  // Setting the local password to an empty string and criteria to an empty array.
  var genPassword = '';
  var passwordCriteria = [];
  // If a given criteria was selected one random character of that type is added to the password string and that criteria
  // type is added to the local criteria array.
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
  // The remaining number of characters necessary to fulfill the users criteria is determined.
  var remainingLength = length - genPassword.length;
  // Loop through for the number of remaining characters. Each loop generates a random integer ranging from 1 to the number of
  // criteria selected by the user. This is used to index the passwordCriteria array and assign that value to whichRandomChar,
  // which is then checked for which possible criteria it matches. This match calls the corresponding random character function
  // and adds it to the genPassword string.
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
  // Return the completed password.
  return genPassword;
}

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

// Add event listener to generate button. When the generate button is clicked, call writePassword function.
generateBtn.addEventListener("click", writePassword);
