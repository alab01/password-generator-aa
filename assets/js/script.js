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

    if (shouldIncludeLowercase || shouldIncludeUppercase || shouldIncludeNumeric || shouldIncludeSpecialCharacter) {
      var password = "";
      while (password.length != passwordLen) {
        if (shouldIncludeLowercase) {
          var randIndex = Math.floor(Math.random()*lowercaseLetters.length);
          password = password + lowercaseLetters[randIndex];
          if (password.length === passwordLen)
            break;
        } 
        if (shouldIncludeUppercase) {
          var randIndex = Math.floor(Math.random()*uppercaseLetters.length);
          password = password + uppercaseLetters[randIndex];
          if (password.length === passwordLen)
            break;
        } 
        if (shouldIncludeNumeric) {
          var randIndex = Math.floor(Math.random()*numbers.length);
          password = password + numbers[randIndex];
          if (password.length === passwordLen)
            break;
        } 
        if (shouldIncludeSpecialCharacter) {
          var randIndex = Math.floor(Math.random()*special.length);
          password = password + special[randIndex];
          if (password.length === passwordLen)
            break;
        }
      } 
      return password;
    } else {
      return "Password must contain at least one of the four: 1. Lowercase 2. Uppercase 3. Numbers 4. Special Characters";
    }
  } else {
    return "Password length must be between 8 to 128 characters.";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
