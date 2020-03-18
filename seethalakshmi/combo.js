/*Combination of array elements*/
let input_array= ['a','b','c'];
let temp;        //declation of temproary variable
let array_size = input_array.length;
for( let i= 0;i<array_size;i++){
    for(let j=0;j<array_size-1;j++){
    temp = input_array[j];
    input_array[j]=input_array[j+1];
    input_array[j+1]=temp;
//console.log(input_array[i]+input_array[i+1]);
console.log(input_array);
}
}