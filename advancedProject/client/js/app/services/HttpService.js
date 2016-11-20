class HttpService {

	get(url) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest(); // creating a xml http request
			xhr.open('GET', url); // defining the method and address to access

			// configs
			xhr.onreadystatechange = () => {
				/*
				status:
				0: requisição ainda não iniciada
				1: conexão com servidor estabelecida
				2: requisição recebida
				3: processando requisição
				4: requisição concluída e a resposta está pronta
				*/
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					} else {
						reject(xhr.responseText);
					}
				}
			};

			xhr.send(); // sending the request to the address with the configs
		});
	}
}