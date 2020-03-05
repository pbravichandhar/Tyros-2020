// use lodash ...
let _ = require('lodash');    //the Lodash library is mapped to the underscore character.
let total = [
    {                         // all the array are considered to brand...
    product : 'milk ',
    quantity : 3 ,
    price : 160
    },{
        product : 'sugar' ,
        quantity : 5 ,
        price : 450
        },{
            product : 'bread' ,
            quantity : 10 ,
            price : 200
        }
];
let invesment =_.sumBy(total , function(brand){           //using lodash function for adding the price...
    return brand. price ;
});
console.log(invesment);                                  //print the output of prices... 
