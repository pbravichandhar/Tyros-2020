const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let input_array = [];
let array_size = 8;
let index = 0;
let value =7;
rl.question('Enter the elements:',(elements)=>{
    if(index<array_size){
        input_array.push(elements);
        index++;
    }
        console.log(input_array);
        computeSum();
    rl.close();
});
function computeSum(input_array){
    let reference_array = [];
    for(index=0;index<array_size;index++){
        let present_num = input_array[index];
        let difference_value = Value - present_num;
        if(reference_array.includes(difference_value)){
            console.log(present_num+ "+" +difference_value);
        }
        reference_array.push(present_num);
    }
}