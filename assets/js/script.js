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
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
