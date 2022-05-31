// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@$=<>?#%";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var passwordLen = parseInt(window.prompt("What should be the length of your password?"));
  if (passwordLen >= 8 && passwordLen <= 128) {
    var lowercase = window.prompt("Do you want to include lower case characters?");
    var shouldIncludeLowercase = false;
    if (lowercase === "yes") {
      shouldIncludeLowercase = true;
    }
    
    var uppercase = window.prompt("Do you want to include a uppercase characters?");
    var shouldIncludeUppercase = false;
    if (uppercase === "yes") {
      shouldIncludeUppercase = true;
    }
    
    var numeric = window.prompt("Do you want to include numeric characters?");
    var shouldIncludeNumeric = false;
    if (numeric === "yes") {
      shouldIncludeNumeric = true;
    }

    var specialCharacter = window.prompt("Do you want to include special characters?");
    var shouldIncludeSpecialCharacter = false;
    if (specialCharacter === "yes") {
      shouldIncludeSpecialCharacter = true;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
