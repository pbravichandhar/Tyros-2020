//Function expression
let Sum =function(a,b){
    return a+b;
}
console.log(Sum(10,20));
//Arrow function
let Calsum = (x,y) => x+y;
console.log(Calsum(4,3));
//Multiline Arrow function
let Calmul = (val1,val2) => {
    let result = val1*val2;
    return result;
}
console.log(Calmul(10,10));
//Comparision operator
let Calculate = num => {
    if(num%2===0){
        console.log("Even Number");
    }
    else{
        console.log("odd number");
    }
}
Calculate(15);