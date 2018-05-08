<!DOCTYPE html>
<html>
<body>

<h2>Skatenator</h2>

<p>
<script>

var getTrickCounter = 0;
var retryTrickCounter = 0;
var tricks = ["ollie", "nollie", "switchOllie", "fakieOllie"];

var retryStat = [];

function getTrick(t){
	if(tricks[t] === undefined){
      getTrickCounter = 0;
      retryStat = [];
      document.getElementById("tricks").innerHTML = " p";
    }else{
      document.getElementById("tricks").innerHTML = tricks[t];
    }
}

function getTrickOnClick(){
	getTrickCounter += 1;
    document.getElementById("clicks").innerHTML = getTrickCounter;
}

function retryTrickOnClick(){
	retryTrickCounter += 1;
    document.getElementById("retries").innerHTML = retryTrickCounter;
}

function resetTrickCounter(){
	retryTrickCounter = 0;
    document.getElementById("retries").innerHTML = retryTrickCounter;
}

function saveStatForTrick(r){
	retryStat.push(r);
    document.getElementById("retryStat").innerHTML = retryStat;
}

</script>
</p>

<p>
Trick: <a id="tricks">  </a>
</p>

<h3>
<button type="button" onclick="getTrickOnClick(); getTrick(getTrickCounter); saveStatForTrick(retryTrickCounter); resetTrickCounter();">get trick</button>
<button type="button" onclick="retryTrickOnClick();">retry trick</button>
</h3>

<p>
getTrickOnClick: <a id="clicks">0</a>
</p>

<p>
retryTrickOnClicked: <a id="retries">0</a>
</p>

<p>
retryStat: <a id="retryStat">0</a>
</p>


</body>
</html> 
