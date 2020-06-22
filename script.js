//Javascript Password Generator - Created by Donell Torres

//allows html to access javascript function on click of button
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// the writePassword function that the button initiates
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables that hold the possible characters for each type
function generatePassword(){
  var completePasswordString = "";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //asks the user for password length
  var passwordLength = prompt("Please select a password length between 8 and 128 characters.");
  var passwordString = "";
  //make sure the user picks a valid number between 8 and 128
  while ((passwordLength < 8) || (passwordLength > 128)){
    passwordLength = window.prompt("ERROR! Please enter a number between 8 and 128!");
  }
  //continue to rest of the function if password length is acceptable
  if  (passwordLength >= 8 && passwordLength <= 128){

      //Confirm that the user wants special characters in the password
      var useSpecialCharacters = confirm("Do you want to use special characters?");
      //adds special characters
      if (useSpecialCharacters === true){
        completePasswordString = completePasswordString + specialCharacters;
          console.log(completePasswordString);
      }

      //Confirm that the user wants numbers in the password
      var useNumbers = confirm("Do you want to use number characters?");
      //adds number characters
      if (useNumbers === true){
        completePasswordString = completePasswordString + numbers;
          console.log(completePasswordString);
      }

      //Confirm that the user wants lowercase characters in the password
      var useLowercaseCharacters = confirm("Do you want to use lowercase characters?");
      //adds lowercase characters 
      if (useLowercaseCharacters === true){
        completePasswordString = completePasswordString + lowercaseCharacters;
          console.log(completePasswordString);
      }

      //Confirm that the user wants uppercase characters in the password
      var useUppercaseCharacters = confirm("Do you want to use uppercase characters?");
      //adds uppercase characters
      if (useUppercaseCharacters === true){
        completePasswordString = completePasswordString + uppercaseCharacters;
          console.log(completePasswordString);
      }  
  }
  //lets user know if they didn't choose at least one type of character
  else{
      alert("Please choose at least one type of character for your password!");
  }

  //for loop within if statement creating random order or character types selected by the user
  if(completePasswordString !== ""){
      for (i=1; i<=passwordLength; i++){
          passwordString = passwordString + completePasswordString.charAt(Math.floor(Math.random() * Math.floor((completePasswordString.length) - 1)));
          console.log(passwordString);
        }
      return (passwordString);
  }
  //final check of valid inputs by user
  else{
      alert("Please choose at least one type of character for your password!");
  }
}  


