var trsPacientes = document.getElementsByClassName("paciente");

function imprimeNome(trPaciente) {
	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
	console.log(tdNome.textContent);
}

percorreArray(trsPacientes, imprimeNome);