// Assignment Code.
// Assigns variable to the generate button.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
// Function to execute when the generate button is pressed.
function writePassword() {
  // Assigns variable to the result of calling an unwritten function called generatePassword.
  var password = generatePassword();
  // Assigns variable to the text area element.
  var passwordText = document.querySelector("#password");

  // Changes the text area element value to what is stored in variable password.
  passwordText.value = password;

}

// Add event listener to generate button.
// When the generate button is clicked, call writePassword function.
generateBtn.addEventListener("click", writePassword);



// writePassword executes on button click, so it starts everything.
// That should queue prompts, save responses, then call generatePassword.
// I *think* that will get everything done, with additions like styling
// by my preference.