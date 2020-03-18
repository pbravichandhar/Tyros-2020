//To find the lcm of a given numbers
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
//get the no of input from the user......
rl.question('Enter no of elements to find lcm:',(number)=>{
    getElement(number-1);
});
let i;
//get one by one element and stored it in array..
function getElement(number){
    rl.question('Enter elements:',(elements)=>{
            input[number] = elements;
        getElement(number-1);

        if(number == 0){   
            console.log(input);
            findLCM();
            rl.close();
        }
    });
}
function findLCM(){
    //assign the first element to the lcm variable
    let lcm=input[0];
    let gcd=input[0];
    let i=1;
    while(i<input.length){
        gcd=GCD(input[i],lcm);
        lcm=(lcm*input[i])/gcd;
        i++;
    } 
    console.log(input);
    console.log("The lcm of given number is :",+lcm);
    //calculate the gcd of two numbers
    function GCD(a,b){
        if(b==0){
            //y is 0 then it returns 0
            return 0;
        }else{
            //compute gcd of two numbers
            return (b,a%b);
        }
    }


}
