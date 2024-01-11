/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const string1 = str1.trim().toUpperCase();
  const string2 = str2.trim().toUpperCase();
  if(string1.length!==string2.length){
    return false;
  }
       const string3 = str1.split('').sort().join('');
       const string4 = str2.split('').sort().join('');
       return string3 === string4;

}

module.exports = isAnagram;
