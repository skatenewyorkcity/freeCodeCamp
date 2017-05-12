function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var arrVal = [];
  var position = 0;
  
  while(position < arr.length){
    arrVal.push(arr.slice(position, position += size));
  }
  
  return arrVal;
  
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
