var a=0
function Brightside(){
	var x = document.getElementById("pic");
	var y = document.getElementById("music");
	var z = document.getElementById("message");
	if (a==0){
		x.style.display="block";
		y.style.display="block";
		z.style.display="none";
		a++
	}else {
		x.style.display="none";
		y.style.display="none";
		z.style.display="block";
		a--
	}
	
}