function findLongestWord(str) {
	  var numArr = [];
	  var wordArr = str.split(" ");
	  for(var i = 0; i < wordArr.length; i++){
		      numArr[i] = wordArr[i].length;
		    }
	  numArr.sort(function(a, b){return a-b;});
	  numArr.reverse();
	  return numArr[0];
	}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
