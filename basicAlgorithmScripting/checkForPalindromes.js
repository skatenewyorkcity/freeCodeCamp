function palindrome(str) {
//remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
var re = /[^A-Za-z0-9]/g;
//converts to lowercase and replaces non-alphanumeric characters with ''
str = str.toLowerCase().replace(re, '');

//turns str into array of characters
var newStr = str.split('');
//new text
var text = "";
//countdown from last position of the array-1 to 0
for(var i = newStr.length-1; i > -1; i--){
  //assing reverse order to text
  text += newStr[i];
  }

//compares text to str order, palindrome check
if(str == text){
  return true;
  }else{
  return false;
  }
}
                                              
palindrome("eye");

//Note: This answer can be done more efficiently by comparing last and first letter in the array, like a binary search.
