// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLength = parseInt(userInput)

 var password = prompt("Input a password greater than 128 characters")
  if (password.length < = 8){
    window.alert("Password length must be 128 characters greater than 8 characters")
    return
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
