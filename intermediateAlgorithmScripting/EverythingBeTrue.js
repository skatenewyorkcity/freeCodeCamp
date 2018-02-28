function truthCheck(collection, pre) {
  // Is everyone being true?
  var counter = 0;
  
  for (var c in collection){
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
      counter++;
    }
  }
  return counter == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
