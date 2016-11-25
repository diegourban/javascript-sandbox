'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpService = function () {
	function HttpService() {
		_classCallCheck(this, HttpService);
	}

	_createClass(HttpService, [{
		key: '_handleErrors',
		value: function _handleErrors(res) {
			if (!res.ok) {
				throw new Error(res.statusText);
			}

			return res;
		}
	}, {
		key: 'get',
		value: function get(url) {
			var _this = this;

			return fetch(url).then(function (res) {
				return _this._handleErrors(res);
			}).then(function (res) {
				return res.json();
			});
		}
	}, {
		key: 'get_old',
		value: function get_old(url) {
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest(); // creating a xml http request
				xhr.open('GET', url); // defining the method and address to access

				// configs
				xhr.onreadystatechange = function () {
					/*
     readyState:
     0: requisição ainda não iniciada
     1: conexão com servidor estabelecida
     2: requisição recebida
     3: processando requisição
     4: requisição concluída e a resposta está pronta
     */
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							resolve(JSON.parse(xhr.responseText));
						} else {
							reject(xhr.responseText);
						}
					}
				};

				xhr.send(); // sending the request to the address with the configs
			});
		}
	}, {
		key: 'post',
		value: function post(url, dado) {
			var _this2 = this;

			return fetch(url, {
				header: { 'Content-type': 'application/json' },
				method: 'post',
				body: JSON.stringify(dado)
			}).then(function (res) {
				return _this2._handleErrors(res);
			});
		}
	}, {
		key: 'post_old',
		value: function post_old(url, dado) {
			return new Promise(function (resolve, reject) {

				var xhr = new XMLHttpRequest();
				xhr.open("POST", url, true);
				xhr.setRequestHeader("Content-type", "application/json");
				xhr.onreadystatechange = function () {

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
	}]);

	return HttpService;
}();
//# sourceMappingURL=HttpService.js.map