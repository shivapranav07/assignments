/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  string1 = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');//this rem,oves all non apla
  string2 = string1.toLowerCase().split('').reverse().join('');
  if (string1 === string2){
    return true;
  }
   else{
     return false;
   }
}

module.exports = isPalindrome;
