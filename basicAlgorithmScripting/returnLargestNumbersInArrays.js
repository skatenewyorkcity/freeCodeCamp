function largestOfFour(arr) {
	//number of arrays
	var arrLength = arr.length;
	//array of largest number in each array
	var largeNum = [0,0,0,0];
	
	//traverse each array
	for (var i = 0; i < arr.length; i++){
	     
		//for each sub array, traverse it
		for(var k = 0; k < arr[i].length; k++){
	
			//assign largeNum the highest value
			if(arr[i][k] > largeNum[i]){
				
				largeNum[i] = arr[i][k];
		
			}

		}

	}

	  return largeNum;

	}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

