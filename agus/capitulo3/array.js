// Criando o array de objetos
var array = [];
// Criando um objeto de array que instancia o próprio objeto de array
var array = new Array();
// Criando um array de objetos inserindo collection
var array = [3, 5, 12, 8, 7];

array[0] = 3;
array[1] = 5;
array[2] = 12;
array[3] = 8;
array[4] = 7;

array.push(10);
array.push(18);

// show data
console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// edit
array[2] = -2;
array[3] = 5;
console.log(array);

// remove data
array.pop();
array.pop();

// remove data by index
var index = 1;
array.splice(index, 1);
console.log(array);
