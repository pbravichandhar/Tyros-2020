
function performAddorMultiply(a,b,opts){
    if(opts['test']){
        return a * b;
    }else{
        return a + b;
    }
}

console.log("This has performed multiplication of 3 and 4 :"+performAddorMultiply(3,4,{'test':'Akaash'}));
console.log(performAddorMultiply(3,4,{'add':'performed'}));


