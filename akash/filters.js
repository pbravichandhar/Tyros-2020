/**
 * Task 3 : Filters in Node js 
 * 
 * @author Akaash
 * @version 1.0
 * @since 03/03/2020
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Declaring the persson object
let person = {
    name: "",
    notes: []
};

let inputArray = [];

//Getting the input from the user
rl.question('Enter your name:', (name) => {
    person.name = name;
    
    rl.question('Enter no of elements:',(number)=>{
        recursiveReadline(number);
    });
});

//Recursive function to get the array inputs from the user to the notes property in the object
function recursiveReadline(number){
    rl.question('Enter elements:',(elements)=>{
        for(let i=0;i<number;i++){
            inputArray[i] = elements;
        }
        recursiveReadline(number-1);

        if(number == 0){
            console.log(inputArray);
            printObject();
            rl.close();
        }
    });
}


//prints the person object and calculates the topNote in the notes array property
function printObject(){
    person.notes.push(inputArray);

    let max = 0;
    for(let j=0;j<inputArray.length-1;j++){
        if(max < inputArray[j]){
            max = inputArray[j];
        }
    }

    person.topNote = max;

    console.log(person);
}



