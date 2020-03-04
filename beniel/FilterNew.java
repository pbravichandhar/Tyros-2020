/*
@author : beniel
@date: 03-03-2020
@version : node js
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// object creation //
let person = {
    name: "",
    notes: []
};
let inputArray = [];
rl.question('Enter your name:', (name) => {
    person.name = name;

    rl.question('Enter no of elements:', (number) => {
        arrayinput(number - 1);
    });
});
// get the notes value for the object using recursive function //
function arrayinput(number) {
    rl.question('Enter elements:', (elements) => {
        inputArray[number] = elements;
        arrayinput(number - 1);
        // call the function once input notes completed
        if (number == 0) {
            // console.log(inputArray);
            maxFilter();
            rl.close();
        }

    });
}

function maxFilter() {
    inputArray.reverse();
    person.notes.push(inputArray);
    // max value find in array
    let max = 0;
    for (let j = 0; j < inputArray.length + 1; j++) {
        if (max < inputArray[j]) {
            max = inputArray[j];
        }
    }
    // add properties to object and assign the max value
    person.topNote = max;
    console.log(inputArray);
    console.log(person);
}