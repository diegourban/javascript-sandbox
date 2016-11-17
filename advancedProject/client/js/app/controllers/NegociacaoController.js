class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		event.preventDefault();

		//let data = new Date(this._inputData.value.split('-'));
		//let data = new Date(this._inputData.value.repalce(/-/g, ','));
		// ... spread operator, transform the array into a sequence os parameters
		let data = new Date(
			...this._inputData.value
			.split('-')
			.map((item, indice) => indice == 1 ? item - 1 : item)
		); 
		
		let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

		console.log(negociacao);
	}
}