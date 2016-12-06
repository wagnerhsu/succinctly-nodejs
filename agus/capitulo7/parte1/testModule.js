//Para testar digite node 'nomedessearquivo'
var myCalculatorModule = require('./myCalculatorModule.js');
var mySimpleModule = require('./mySimpleModule.js');

var resultCalc = myCalculatorModule.calculate(40, 20);
var mySimpleModule = mySimpleModule.calculate(20, 10);

console.log(resultCalc);
console.log(mySimpleModule);
