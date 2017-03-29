function findLongestWord(str) {
	  var numArr = [];
	  //slipt str into array
	  var wordArr = str.split(" ");
	  //traverse array until the the limit, .length
	  for(var i = 0; i < wordArr.length; i++){
		      //copy num value of each word into new array
		      numArr[i] = wordArr[i].length;
		    }
	  //sorts in ascending order including multi digit numbers
	  numArr.sort(function(a, b){return a-b;});
	  //reverses array order
	  numArr.reverse();
	  //outputs first and larger value in array
	  return numArr[0];
	}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
