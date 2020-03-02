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

//Function Expression
let greet = function(){
    return 'Welcome';
}

name = "Akaash";
console.log(greet()+" " + name);

//Callback Function
function showReply(question,yes,no){
    if(question == "Do you eat chocolates often?")
        yes();
    else 
        no();
}

function printDoEatChocolates(){
    console.log("Dont eat them often, then you may damage your teeth..!");
}

function printDoesntEatChocolates(){
    console.log("Much better..");
}

//Here works the callback function by passing other functions as parameters
showReply("Do you eat chocolates often?",printDoEatChocolates,printDoesntEatChocolates);

//Ternary operator in Functions
let age = 20;
let checkAgeIsValid = (age >= 18) ? function(){
    console.log("Eligible to vote..!");
} : function(){
    console.log("Not Eligible....!");
};

checkAgeIsValid();

//Arrow Functions
let sum = (a,b) => a + b;
console.log(sum(1,2));

//Multiline Arrow Function
let summation = (a,b,c) => {
    let sum = a + b + c;
    return sum;
}




