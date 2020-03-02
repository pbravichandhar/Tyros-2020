/**
 * This program performs function overloading in javascript, as function overloading is not supported in javascript,
 * fake function overloading is performed.
 * 
 *@author Akaash
 *@version 1.0
 *@since 02/03/2020 
 */

//The below function performs the concept of function overloading as same function perfomrs different operations
function performAddorMultiply(a,b,opts){
    if(opts['test']){
        return a * b;
    }else{
        return a + b;
    }
}

//This performs multiplication of a and b
console.log("This has performed multiplication of 3 and 4 :"+performAddorMultiply(3,4,{'test':'Akaash'}));

//This performs addition of a and b
console.log(performAddorMultiply(3,4,{'add':'performed'}));


