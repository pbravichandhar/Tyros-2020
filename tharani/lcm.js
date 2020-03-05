/*this program implements an lcm of any given numbers
*prints the standard result as a output
*/const readline = require('readline');
const tl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputArray = [];
//get the no of input from the user......
tl.question('Enter no of elements to find lcm:',(number)=>{
    getElement(number-1);
});
let i;
//get one by one element and stored it in array..
function getElement(number){
    tl.question('Enter elements:',(elements)=>{
       // for(let i=1;i<number;i++){
            inputArray[number] = elements;
       // }
        getElement(number-1);

        if(number == 0){   
            console.log(inputArray);
            findLCM();
            tl.close();
        }
    });
}
function findLCM(){
    //assign the first element to the lcm variable
    let lcm=inputArray[0];
    let gcd=inputArray[0];
    let i=1;
    while(i<inputArray.length){
        gcd=GCD(inputArray[i],lcm);
        lcm=(lcm*inputArray[i])/gcd;
        i++;
    } 
    console.log(inputArray);
    console.log("The lcm of given number is :",+lcm);
    //calculate the gcd of two numbers
    function GCD(x,y){
        if(y==0){
            //y is 0 then it returns 0
            return 0;
        }else{
            //compute gcd of two numbers
            return (y,x%y);
        }
    }


}