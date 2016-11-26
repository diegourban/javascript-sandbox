export class DateHelper {

	constructor(){
		throw new Error('Esta classe não pode ser instanciada');
	}

	// static = class methods
	static textoParaData(texto) {
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
			throw new Error('Deve estar no formato aaaa-mm-dd');
		}
		// ... spread operator, transform the array into a sequence os parameters
		return new Date(...texto.split('-').map((item, indice) => indice == 1 ? item - 1 : item));
	}

	static dataParaTexto(data) {
		//return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; // template string
	}
}