
function factorialize(num) {

    //set integer val to 1
    var integer = 1;

    //countdown from passed num value to 1
    for(var i = num; i > 0; i--){

      //multiply each countdown value with integer
      integer *=  i;

    }

    //return integer
    return integer;

}

factorialize(5);

