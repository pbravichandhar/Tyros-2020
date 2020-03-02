
//This gives just the concept of hoisting
console.log('x is', x) //prints undefined 

var x

console.log('x is', x) //also prints undefinded

x = 5

console.log('x is', x) //prints 5

//In primitve types, the value and size of the variable unless or until it is changed...
let number1 = 15;
let number2 = number1;

number2 = 40;

console.log("Number 1 is "+number1);
console.log("Number 2 is "+number2);

//In Referenced types, if one object is changed, the objects referred to that are also changed, all the changes are made in that
//referred object too....
let airforce = new Object();
let navy = airforce;


//This also refers to the concept of dynamic properties in an object
navy.ageFit = 34;

console.log(airforce.ageFit);
console.log(navy.ageFit);

//Dynamic properties
airforce.required = 'elibility';
navy.eligible = 'B.E / B.tech';

console.log(airforce); 
console.log(navy);

