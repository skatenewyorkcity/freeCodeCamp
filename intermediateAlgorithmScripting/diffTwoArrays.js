function diffArray(arr1, arr2) {
   var newArr = []; 
  
   var ordArr = arr1.concat(arr2).sort(); 

   for(var i=0; i<ordArr.length; i++) {
       if(ordArr[i] !== ordArr[i+1] && ordArr[i] !== ordArr[i-1]){
       newArr.push(ordArr[i]);
       }
   }

   return newArr;
}
