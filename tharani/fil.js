const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let person = {
    name: "",
    notes: []
};

let inputArray = [];
rl.question('Enter your name:', (name) => {
    person.name = name;
    
    rl.question('Enter no of elements:',(number)=>{
        getElement(number);
    });
});

function getElement(number){
    rl.question('Enter elements   one by one:',(elements)=>{
        for(let i=0;i<number;i++){
            inputArray[i] = elements;
        }
        getElement(number-1);

        if(number == 0){   
            console.log(inputArray);
            findMax();
            rl.close();
        }
    });
}

function findMax(){
    person.notes.push(inputArray);

    let largest = 0;
    for(let j=0;j<inputArray.length-1;j++){
        if(largest< inputArray[j]){
            largest = inputArray[j];
        }
    }

    person.topNote = largest;

    console.log(person);
}
