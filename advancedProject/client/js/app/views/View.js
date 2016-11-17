class View {

	constructor(elemento) {
		this._elemento = elemento;
	}

	template() {
		// caso alguma classe filha esqueça de implementar o método _template
		// lança uma exceção para lembrar de implementar
		throw new Error('O método template deve ser implementado');
	}

	update(modelo) {
		this._elemento.innerHTML = this.template(modelo);
	}

}