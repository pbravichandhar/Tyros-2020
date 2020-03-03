/**
*<h6> filters  in java script </h6> 
*
*@author Arunkumar
*@version 1.0
*@since 03-03-2020 
*/
const readline = require('readline');      
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let person = {    // object creation
    name: "",
    notes: []
};

let inputArray = [];
rl.question('Enter your name:', (name) => {        // get name 
    person.name = name;
    
    rl.question('Enter no of elements:',(number)=>{    // get limitation elements
        recursiveReadline(number);
    });
});

function recursiveReadline(number){
    rl.question('Enter elements:',(elements)=>{      // get elements 
        for(let i=0;i<number;i++){
            inputArray[i] = elements;
        }
        recursiveReadline(number-1);

        if(number == 0){
            console.log(inputArray);    // show the values of inputarray
            show();
            rl.close();
        }
    });
}

function show(){
    person.notes.push(inputArray);

    let max = 0;                                     
    for(let j=0;j<inputArray.length-1;j++){       
        if(max < inputArray[j]){     // maximun value algorithm
            max = inputArray[j];
        }
    }

    person.topNote = max;

    console.log(person);
}
