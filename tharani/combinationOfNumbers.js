/*This program prints the all permutation of a given number or string
*prints the standard result as a output
*@author:tharani
*@version:1.0
*/
const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr=[];
let count=0;
input.question('Enter the number',(number)=>{
    for(let i=0;i<number.length;i++){
        //get the elements from the user and push it into a empty array
        arr.push(number[i]);
        
    }
    //console.log(arr);
    //check the array of each element with the another element

    for(let j=0;j<arr.length;j++){
        for(let k=0;k<arr.length-1;k++){
           // for(let l=k+1;l<arr.length;l++){
            if(arr[k]!=arr[k+1]){
                //swap the element with the help of temp variable
                temp=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=temp;
                //increase the count of the iteration to find the total
               count++;
            }
            //prints the each combinations
            console.log(arr);
       // }
            
        }
    }
    //prints the total number of combinations to be iterated
    console.log('total :' +count);

});
