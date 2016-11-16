var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosIMCs;
//botao.onclick = function() {
//	console.log("Calculando imcs");
//}

botao.addEventListener("click", function () {
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, calculaIMC);

	function calculaIMC(trPaciente) {
		var paciente = montaPaciente(trPaciente); //aqui chamamos a nova função
		var imcDoPaciente = paciente.getIMC();
		var tdIMC = trPaciente.getElementsByClassName("info-imc")[0];
		tdIMC.textContent = imcDoPaciente; //Altera o conteúdo do td para o valor da variável imc
	}
});

botao.addEventListener("click", function() {
	console.log("Calculando imcs");
});