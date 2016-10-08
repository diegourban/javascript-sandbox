/*
var nome = document.getElementById("nome-1").textContent; // pega o nome do paciente
var peso = document.getElementById("peso-1").textContent; // pega o peso do paciente
var altura = document.getElementById("altura-1").textContent; // pega a altura do paciente

var paciente1 = {
	nome : nome,
    peso : peso,
    altura : altura
}

nome = document.getElementById("nome-2").textContent; // pega o nome do paciente
peso = document.getElementById("peso-2").textContent; // pega o peso do paciente
altura = document.getElementById("altura-2").textContent; // pega a altura do paciente

var paciente2 = {
	nome : nome,
    peso : peso,
    altura : altura
}

var pacientes = [paciente1, paciente2];
*/


var trsPacientes = document.getElementsByClassName("paciente");

for (var i = 0; i < trsPacientes.length; i++) {
	var trPaciente = trsPacientes[i];

	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
	var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
	var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : tdNome.textContent,
	    peso : tdPeso.textContent,
	    altura : tdAltura.textContent
	}

	if(paciente.altura != 0){
	    var imc = paciente.peso / (paciente.altura * paciente.altura);

	    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
	    tdImc.textContent = imc; //Altera o conteúdo do td para o valor da variável imc

	    console.log(imc);
	} else {
	    console("Não posso executar uma divisão por 0!");
	}
}