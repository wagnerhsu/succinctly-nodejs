// string to numeric
console.log('-----parseInt-----');
console.log(parseInt('123'));
console.log(parseInt('123.45'));
console.log(parseInt('-123'));
console.log(parseInt('0.34'));
console.log(parseInt('12abc'));

console.log('-----parseFloat-----');
console.log(parseFloat('123'));
console.log(parseFloat('123.45'));
console.log(parseFloat('-123'));
console.log(parseFloat('0.34'));
console.log(parseFloat('12abc'));


// Numeric to string
var a = 123;
var b = a + '';

var num = 405;
var str = num.toString();
console.log("O número é: " + num);


// String parser - split
var data = 'Berlin;Amsterdam;London;Jakarta';
var strs = data.split(';');

for (var index in strs) {
    console.log(strs[index]);
}
