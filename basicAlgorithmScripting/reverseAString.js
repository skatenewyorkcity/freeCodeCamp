function reverseString(str) {

    //turns str into array of characters
    var newStr = str.split('');

    //new text
    var text = "";

    //countdown from last position of the array-1 to 0
    for(var i = newStr.length-1; i > -1; i--){
    
    //assing reverse order to text
    text += newStr[i];
  
  }

//return text
return text;

}

reverseString("hello");

