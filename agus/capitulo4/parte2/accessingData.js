// accessing Data
console.log('Name:' + customer.name);
console.log('Email:' + customer.email);
console.log('Age:' + customer.age);
console.log('Registered Date:' + customer.registeredDate);
console.log('Country:' + customer.country);

// iterando valores
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
