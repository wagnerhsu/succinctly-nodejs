// creating object
var customer = {
    name: 'Michael Z',
    email: 'michael@email.com',
    age: 35,
    registeredDate: new Date(),
    address: {
        city: 'Berlin',
        country: 'Berlin'
    }
}

// Exibindo customer
console.log(customer);


// Acessando informaçao
console.log('Name:' + customer.name);
console.log('Email:' + customer.email);
console.log('Age:' + customer.age);
console.log('Registered Date:' + customer.registeredDate);
console.log('Country:' + customer.country);


// Iterando valores
var myjson = {
    id: 2,
    name: 'jackson',
    email: 'jackson@email.com'
};
for (var att in myjson) {
    console.log(att);
}


// checar se o nome do atributo existe em seu JSON
var myjson = {
    id: 2,
    name: 'jackson',
    email: 'jackson@email.com'
};
// check attribute - retorna true or false
console.log(myjson.hasOwnProperty('id')); console.log(myjson.hasOwnProperty('name')); console.log(myjson.hasOwnProperty('email')); console.log(myjson.hasOwnProperty('home'));

// editing data
customer.email = 'michael2012@email.com';
customer.age = 33;
console.log(customer);

var myjson = {
    id: 2,
    name: 'jackson',
    email: 'jackson@email.com'
};
console.log(myjson);
myjson['country'] = 'germany';
console.log(myjson);
