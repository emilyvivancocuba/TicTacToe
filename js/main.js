$(document).ready(function(){
	var suma=0;
	var ganador='';
	for (var i = 1; i <=9; i++) {
		if ($('#i').val()==='x'||$('#i').val()==='o') {
			suma+=1;
		}
	}
	if (suma>=3) {
		if ($('#1').val()===$('#2').val()&&$('#1').val()===$('#3').val()||
			$('#1').val()===$('#4').val()&&$('#1').val()===$('#7').val()||
			$('#1').val()===$('#5').val()&&$('#1').val()===$('#9').val()){
			ganador=$('#1').val();
		}
		if ($('#2').val()===$('#5').val()&&$('#2').val()===$('#8').val()||
			$('#3').val()===$('#5').val()&&$('#3').val()===$('#7').val()||
			$('#4').val()===$('#5').val()&&$('#4').val()===$('#6').val()){
			ganador=$('#5').val();
		}
		if ($('#3').val()===$('#6').val()&&$('#3').val()===$('#9').val()||
			$('#7').val()===$('#8').val()&&$('#7').val()===$('#9').val()) {
			ganador=$('#9').val();
		}
	}
	return ganador;
});
alert('El ganador es'+ganador);