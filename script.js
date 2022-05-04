// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
 var password = "";
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var number = "0123456789";
 var symbol = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";
 var newPass = "";
 var criteriaChosen = 0;
 var required = "";
 var random = 0;
 var finalPass = "";

 window.alert("Please choose criteria");

 //if selected, add lowercase letters to potential password
 var isLower = window.confirm("Should the password contain lowercase letters?");
 if (isLower) {
   password = password.concat(lower);
   random = Math.floor(Math.random() * lower.length);
   required += lower.substring(random, random +1);
   criteriaChosen++
 }

//if selected, add upperccase letters to potential password
var isUpper = window.confirm("Should the password contain uppercase letters?");
if (isUpper) {
  password = password.concat(upper);
  random = Math.floor(Math.random() * upper.length);
   required += upper.substring(random, random +1);
  
  criteriaChosen++
}

//if selected, add numbers to potential password
var isNumber = window.confirm("Should the password contain numbers?");
if (isNumber) {
  password = password.concat(number);
  random = Math.floor(Math.random() * number.length);
   required += number.substring(random, random +1);
 
  criteriaChosen++
}

//if selected, add symbols to potential password
var isSymbol = window.confirm("Should the password contain symbols?");
if (isSymbol) {
  password = password.concat(symbol);
  random = Math.floor(Math.random() * symbol.length);
   required += symbol.substring(random, random +1);
 
  criteriaChosen++
}

//user inputs desired length of password
var passLength = window.prompt("Please enter desired length (8-128 characters)");

//randomly creates password from chosen criteria
for (var i = 0; i <= passLength - criteriaChosen; i++ ) {
  var randomNumber = Math.floor(Math.random() * password.length);
  newPass += password.substring(randomNumber, randomNumber +1);
}

finalPass = newPass.concat(required);


//display created password
document.getElementById("newpassword").textContent = finalPass;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
