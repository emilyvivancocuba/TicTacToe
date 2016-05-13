var boton_jugar = document.getElementsByClassName('play');
var resetear=document.getElementById('resetear');
function reset(){
	for (var k=0; k<9; k++) {
		boton_jugar[k].textContent='';
	}
}
resetear.onclick=reset();
var contar=0;
var suma=0;
for (var i=0; i<9; i++) {
	boton_jugar[i].onclick=function(){
		contar++;
		suma++;
		if (contar%2===0) {
			this.textContent = 'o';
		}else{
			this.textContent = 'x';
		}
		this.setAttribute('disabled', false);
		if (suma>=5) {
			if (($('#1').text()==$('#2').text()&&$('#1').text()==$('#3').text())||($('#1').text()==$('#4').text()&&$('#1').text()==$('#7').text())||($('#1').text()==$('#5').text()&&$('#1').text()==$('#9').text())) {
				if ($('#1').text()=='x') {
					alert('El ganador es x');
					reset();
				}
				if ($('#1').text()=='o') {
					alert('El ganador es o');
					reset();
				}
			}else if (($('#2').text()==$('#5').text()&&$('#5').text()==$('#8').text())||($('#3').text()==$('#5').text()&&$('#5').text()==$('#7').text())||($('#4').text()==$('#5').text()&&$('#5').text()==$('#6').text())) {
				if ($('#5').text()=='x') {
					alert('El ganador es x');
					reset();
				}
				if ($('#5').text()=='o') {
					alert('El ganador es o');
					reset();
				}
			}else if (($('#3').text()==$('#6').text()&&$('#6').text()==$('#9').text())||($('#7').text()==$('#8').text()&&$('#8').text()==$('#9').text())) {
				if ($('#9').text()=='x') {
					alert('El ganador es x');
					reset();
				}
				if ($('#9').text()=='o') {
					alert('El ganador es o');
					reset();
				}
			}else if (suma===9) {
				alert('JUEGO EMPATADO');
				reset();
			}
		}
	}
}