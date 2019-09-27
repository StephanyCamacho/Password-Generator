var bigChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var smallChar = 'abcdefghijklmnopqrstuvwxyz';
var numbers = 0123456789;
var specialChar = '~!@#$%^&*()_+=';

var charLength = prompt("How many characters?");
var numChar = confirm("Would you like numbers?");
var lowerChar = confirm("Would you like lowercase characters?");
var upperChar = confirm("Would you like uppercase characters?");

var generatePassword = function (charLength){
    
    retValue = "";
    for(var i = 0; i<= charLength; i++){
        var i = Math.floor(Math.random() * charLength);
    }
    return retValue;
    document.getElementById("password");
}