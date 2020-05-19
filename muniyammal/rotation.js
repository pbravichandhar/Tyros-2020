const arr = [1,2,3,4,5];
let k=3;
function arrayRotation(arr, k) {
     for(let i = 0; i < k; i++){
         arr.push(arr.shift());
     }    
     return arr;
 }
 
 console.log(arrayRotation([1,2,3,4,5], 2));
 console.log(arrayRotation([1,2,3,4,5], 3));