// Assignment code here
var passwordGenerator = function(){
  //variables that contain possible characters for password
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var possibleNumber = "1234567890";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  //get length of password
  var lengthOfPassword = window.prompt("How long would you like your password to be? (8-128 characters long): ");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
