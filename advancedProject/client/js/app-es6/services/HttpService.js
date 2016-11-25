class HttpService {

	_handleErrors(res) {
		if(!res.ok) {
			throw new Error(res.statusText);
		}

		return res;
	}

	get(url) {
		return fetch(url)
			.then(res => this._handleErrors(res))
			.then(res => res.json());
	}

	get_old(url) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest(); // creating a xml http request
			xhr.open('GET', url); // defining the method and address to access

			// configs
			xhr.onreadystatechange = () => {
				/*
				readyState:
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

	post(url, dado) {
		return fetch(url, {
			header: {'Content-type' : 'application/json'},
			method: 'post',
			body: JSON.stringify(dado)
		})
		.then(res => this._handleErrors(res));
	}

	post_old(url, dado) {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });

    }
}