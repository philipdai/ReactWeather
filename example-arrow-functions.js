'use strict';

// let names = ['Alan', 'Black', 'Candy'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// names.forEach(name => console.log('arrorFunction', name));

// let returnMe = name => name + '!';

// names.forEach(name => console.log(returnMe(name)));

// let person = {
//   name: 'Phil',
//   greet: function () {
//     names.forEach(name => console.log(`${this.name} says hey to ${name}`));
//   }
// };

// person.greet();

function add (a, b) {
  return a + b;
}

// console.log(add(3, 5));
// console.log(add(2, 1));

// addExpression
let add1 = (a, b) => a + b;
// addStatement
let add2 = (a, b) => {
  return a + b;
};
console.log(add1(3, 5));
console.log(add2(2, 1));
