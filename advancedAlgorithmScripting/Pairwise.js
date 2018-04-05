
function pairwise(arr, arg) {
  var sum = 0;
  
  var pairArr = arr.slice();
  
  for(i = 0; i < pairArr.length; i++){
    for (j = i + 1; j < pairArr.length; j++){
      if(pairArr[i] + pairArr[j] == arg){
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
