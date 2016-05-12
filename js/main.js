var boton_jugar = document.getElementsByClassName('play');
var contar=0;
for (var i=0; i<9; i++) {
	boton_jugar[i].onclick=function(){
		contar++;
		if (contar%2===0) {
			this.textContent = "x";
		}else{
			this.textContent = "o";
		}
	}
}
var reset = document.getElementsByClassName('resetear');
reset.onclick=function(){
	boton_jugar
}