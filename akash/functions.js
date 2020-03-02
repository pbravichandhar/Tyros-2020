/**
 * This programs explains the concept of Functions in javascript
 * 
 * @author Akaash
 * @version 1.0
 * @since 02/03/2020
 */

let name = "Akaash";

//general syntax for functions in javascript
function printString(){
    console.log("Hello "+name);

    //Changing the value of the global variable name
    name = "Arun";
}

//function call for printString()
printString();
printString();

//Assigning values to the parameters of the function
function passingValueToArguments(name, welcome=',How are you..?'){
    console.log('Hii '+name+welcome);
}

passingValueToArguments('Akaash');

//Assigning value for undefinded parameter of a function in old versions of JS
function toSupportOldJS(name,text){

        text = text || "How are You..?";

    console.log(name+", "+text);
}

toSupportOldJS('Akaash');
toSupportOldJS('Akaash', 'looking good..');

//Return a value in functions
function checkAge(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
if(checkAge(18)){
    console.log('Access Granted');
}else{
    console.log('Access Denied');
}

//printing the returned value from checkAge
console.log(checkAge(14));

//return value in multiple lines
function calcMultiExpressions(a,b,c,d){
    return (
        a * b + 
        (c / d) ** a +
        c * b * a * d
    );
}

console.log(calcMultiExpressions(1,2,3,4));

//Splitting one function's action to two functions inside one function
function showPrimes(limit){
    //Short definition of a function to go to the next prime number  
    nextPrime : for(let i = 2; i < limit; i++){
        for(let j = 2; j < i; j++){
            //jumps to nextprime shortHand representation of a function
            if(i % j == 0) continue nextPrime;
        }

        console.log("The prime numbers are "+i);
    }
}

showPrimes(30);




