var now = new Date();

var productTransaction = {
    id: 2,
    user: 'agusk',
    transactionDate: now,
    details: [{
        code: 'p01',
        name: 'ipad 3',
        price: 600
    }, {
        code: 'p02',
        name: 'galaxy tab',
        price: 500
    }, {
        code: 'p03',
        name: 'kindle',
        price: 120
    }]
}

console.log(productTransaction);

// exibindo informação
console.log('Id:' + productTransaction.id);
console.log('User:' + productTransaction.user);
console.log('Transaction date:' + productTransaction.transactionDate);
console.log('Details:' + productTransaction.details);

// Exibindo informação com for
for (var i = 0; i < productTransaction.details.length; i++) {
    console.log('Code:' + productTransaction.details[i].code);
    console.log('Name:' + productTransaction.details[i].name);
    console.log('Price:' + productTransaction.details[i].price);
}

// detalhes do script
console.log('Details:' + productTransaction.details);

// Detalhes do produto
console.log('Details:' + productTransaction.details);
VM312: 1 Details: [object Object], [object Object], [object Object]
undefined
productTransaction.user = 'zahra';
productTransaction.details[0]['price'] = 250;
console.log(productTransaction);
