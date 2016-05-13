var boton_jugar = document.getElementsByClassName('play');
var contar=0;
for (var i=0; i<9; i++) {
	boton_jugar[i].onclick=function(){
		contar++;
		if (contar%2===0) {
			this.textContent = "o";
		}else{
			this.textContent = "x";
		}
	}
}ganar();
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve;
uno=''; dos='';
function ganar(){
	uno+=document.getElementById('1').value;
	dos+=document.getElementById('2').value;
	tres+=document.getElementById('3').value;
	cuatro+=document.getElementById('4').value;
	cinco+=document.getElementById('5').value;
	seis+=document.getElementById('6').value;
	siete+=document.getElementById('7').value;
	ocho+=document.getElementById('8').value;
	nueve+=document.getElementById('9').value;
	console.log(uno);
	console.log(dos);
}




// if (($('#1').val==$('#2').val&&$('#1').val==$('#3').val)||($('#1').val==$('#4').val&&$('#1').val==$('#7').val)||($('#1').val==$('#5').val&&$('#1').val==$('#9').val)) {
// 			if ($('#1').val=='x') {
// 				//alert('El ganador es x');
// 				console.log($('#1').val);
// 			}else{
// 				//alert('El ganador es o');
// 				console.log($('#1').val);
// 			}
// 		}
// 		if (($('#2').val==$('#5').val&&$('#5').val==$('#8').val)||($('#3').val==$('#5').val&&$('#5').val==$('#7').val)||($('#4').val==$('#5').val&&$('#5').val==$('#6').val)) {
// 			if ($('#5').val=='x') {
// 				//alert('El ganador es x');
// 				console.log($('#5').val);
// 			}else{
// 				//alert('El ganador es o');
// 				console.log($('#5').val);
// 			}
// 		}
// 		if (($('#3').val==$('#6').val&&$('#6').val==$('#9').val)||($('#7').val==$('#8').val&&$('#8').val==$('#9').val)) {
// 			if ($('#9').val=='x') {
// 				//alert('El ganador es x');
// 				console.log($('#9').val);
// 			}else{
// 				//alert('El ganador es o');
// 				console.log($('#1').val);
// 			}
// 		}