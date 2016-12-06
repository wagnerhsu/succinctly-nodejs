var str = 'Hello WORLD, nodejs';

// indexOf indica que o index começa aqui
console.log('-----indexOf-----');
console.log(str.indexOf('ello'));
console.log(str.indexOf('nodejs'));
console.log(str.indexOf('e'));

console.log('-----lastIndexOf-----');
console.log(str.lastIndexOf('ello'));
console.log(str.lastIndexOf('nodejs'));
console.log(str.lastIndexOf('e'));

// O que acontece se não existir string no dado
var a = 'Hello WORLD, nodejs';
console.log(a.indexOf('C#'));

// chartArt permite pegar um caractere de uma especifica posição
var data = 'Berlin;Amsterdam;London;Jakarta';

console.log(data.charAt(0));
console.log(data.charAt(4));
console.log(data.charAt(7));
console.log(data.charAt(10));

var trash = 'Berlin;Amsterdam;London;Jakarta';
console.log(trash.charAt(100));
