function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  //if str length is less than equal return str
  if(str.length <= num){
    return str;
  } 
  //if num less than of equal to two return str.slice(0, num)
  else if (num <= 2){
    return str.slice(0, num)+"...";
  } 
  //else return str.slice(0, num - 3)
  else {
    return str.slice(0, num - 3)+"...";
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

