function titleCase(str) {
  //wordsArr, array of words in lowercase
  var wordsArr = str.toLowerCase().split(" ");
  //wordArr, array of letters of each word
  var wordArr = [];

  //traverse all the words in wordsArr
  for(var i = 0; i < wordsArr.length; i++){
    //for each word in wordsArr traversed, capitalize the first letter, 
    //then add the remaining rest of the word, Assign all that to wordArr	      
    wordArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }

  return wordArr.join(" ");
}

titleCase("I'm a little tea pot");
