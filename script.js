var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';

var charLength = prompt("How many characters?");
var numChar = confirm("Would you like numbers?");
var lowerChar = confirm("Would you like lowercase characters?");
var upperChar = confirm("Would you like uppercase characters?");
var special = confirm("Would you like special characters?");

function generatePassword() {
    var result = '';
    for (var i = 0; i < charLength; i++) {
      result += upperEl.charAt(Math.floor(Math.random() * upperEl.length));
    }
    return result;
  }
  console.log(generatePassword(charLength));