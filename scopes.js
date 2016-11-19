class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(function () {
            console.log(++this._segundos); // prints (Not a Number), this belongs to window
          }, 1000);
    }
}

// ajusting
class Relogio {

    constructor() {

        let self = this; // guardando o this que é a instância da classe `Relogio`
        this._segundos = 0;

        setInterval(function () {
            console.log(++self._segundos); // acessando a variável self, que é a instância de `Relogio` 
          }, 1000);

    }
}

// simplyfing with arrow function
class Relogio {

    constructor() {
        this._segundos = 0;
        setInterval(() => console.log(++this._segundos), 1000); // usando arrow function. O this é o this de `Relogio`, e não `window`. 
    }
}

var relogio = new Relogio();