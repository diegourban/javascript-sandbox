let funcionario = {email: 'abc@abc.com'};

// creating a proxy for funcionario
let funcionarioProxy = new Proxy(funcionario,  {

	// handling get(read) methods
    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        // return Reflect.get(target, prop, receiver); // similiar to:
        return target[prop];
    }

    // handling set methods
    set(target, prop, value, receiver) {
        console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
        //return Reflect.set(target, prop, value, receiver); // or:
        target[prop] = value;
    }

});

funcionarioProxy.email = 'aaa@aaa.com';
console.log(funcionarioProxy.email);