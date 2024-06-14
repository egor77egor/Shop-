var buyf=false;
function buy(){
	if(!buyf){
		document.getElementById("btn").style.background= "blue";
	document.getElementById("btn").innerHTML= 'куплено'
	document.getElementById("btn").style.color= "white"
	buyf=true;
	}
	else{
		document.getElementById("btn").style.background= "pink";
	document.getElementById("btn").innerHTML= 'продано'
	document.getElementById("btn").style.color= "blue"
	buyf=false;
	}
 }