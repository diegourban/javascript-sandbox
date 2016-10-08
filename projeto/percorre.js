function percorreArray(trs, comportamento) {
	for (var i = 0; i < trs.length; i++) {
		var tr = trs[i];

		comportamento(tr);
	}	
}
