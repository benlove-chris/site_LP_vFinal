
function calcular(){
	var numero = parseInt(document.getElementById("numero").value, 10);
	var benlove = numero.toString();
	document.getElementById("reponse").innerHTML 
	= "O " + " numero "+benlove+" tem "
	+ benlove.length +" dígitos" ; 

}

