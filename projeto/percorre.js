function percorreArray(trsPacientes, comportamento) {
	for (var i = 0; i < trsPacientes.length; i++) {
		var trPaciente = trsPacientes[i];

		comportamento(trPaciente);
	}	
}
