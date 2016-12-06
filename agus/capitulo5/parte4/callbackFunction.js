/*
Função callback é uma função que é chamada de função ponteiro.
Se voce passar o pointer (endereço) de uma funçao como um argumento para outro ponteiro
o outro ponteiro usa para chamar a função
*/
function perform(a, b, callback) {
    var c = a * b + a;
    callback(c);
}

// callback
perform(10, 5, function (result) {
    console.log(result);
})
