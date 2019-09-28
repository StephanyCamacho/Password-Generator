var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';

var passwordEl = document.getElementById("password");

var userChoices = {};

var charLength = parseInt(prompt("How many characters?"));

// userChoice["charLength"] = charLength; 
// while(charLength >! 128){
//   prompt("Please choose a number between 8 and 128.");
// }
// while(charLength <! 8){
//   prompt("Please choose a number between 8 and 128.");
// }

// get user input
// var numChar = confirm("Would you like numbers?");
// var lowerChar = confirm("Would you like lowercase characters?");
// var upperChar = confirm("Would you like uppercase characters?");
// var special = confirm("Would you like special characters?");

function promptUser() {
  var numChar = confirm("Would you like numbers?");
  var lowerChar = confirm("Would you like lowercase characters?");
  var upperChar = confirm("Would you like uppercase characters?");
  var special = confirm("Would you like special characters?");

  if (numChar) {
    userChoices["numEl"] = numEl;
  }
  if (lowerChar) {
    userChoices["lowerEl"] = lowerEl;
  }  
  if (upperChar) {
    userChoices["upperEl"] = upperEl;
  }
  if (special) {
    userChoices["specialEl"] = specialEl;
  }
  
  // for (var key in userChoices) {
  //   console.log(key);
  //   console.log(userChoices[key]);
  //   if (userChoices[key]) {
  //     console.log(key);
  //      // do something about it like run some function to create a password
      
  //   }
  // }
  console.log(userChoices);
}

promptUser();

function generatePassword() {
    var result = '';
    for (var i = 0; i < charLength; i++) {
      result += upperEl.charAt(Math.floor(Math.random() * upperEl.length));
    }
    return result;
};

console.log(generatePassword(charLength));


/*


*/
// '8' > 8
// string > Number
// '8' + '8' = '88';
// 8 + 8 = 16

// while charLength is less than or equal to 8 (parseInt(userChoices.charLength))
// loop over "El" properties and randomly grab a character from each value
// the random grab with me a functino called 'getRandom'
// once random number is grabbded, add character (concat) to a 'result' string (smilar to waht you have in your generate password function)
/*
  userChoices = {
    upperEl: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lowerEl: 'abcdefghijklmnopqrstuvwxyz';
    numEl: '0123456789';
    specialEl: '~!@#$%^&*()_+=';
  }
*/

function writePassword() {
  let finalPassword = '';
  while (charLength > 0) { // as long as password length is still > 0 {
    for (var key in userChoices) { // iterate over object
      // get random character
      let char = getRandomCharacter(userChoices[key]);
      console.log('Random Character', char);
      // concat to final password
      finalPassword = finalPassword + char;
      console.log(finalPassword, finalPassword.length);
      charLength--;
      console.log('>>>>>>>>>>>>>>>>', charLength)
    }
  }
  return finalPassword
}


function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();