// constructor
var Account = module.exports = function () {
    console.log('constructor');
}

// method
Account.prototype.perform = function () {
    console.log('perform');
}

// method
Account.prototype.foo = function (a, b) {
    console.log('foo - ' + a + '-' + b);
}


/*
É possível expor uma classe utilizando module.exports, então é implementado metodos de classes utilizando prototype
*/
