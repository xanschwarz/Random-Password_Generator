// Assignment Code. Assigns variable to the generate button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. Function to execute when the generate button is pressed.
function writePassword() {
  
  
  // The result of the generatePassword function is stored as variable password. Then the text area element is assigned to
  // passwordText, and the value of that is set equal to variable password.
  // var password = generatePassword();
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