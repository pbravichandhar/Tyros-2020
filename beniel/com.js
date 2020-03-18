/*
Write an efficient program to print all permutations of a given String in Javascript.
 Consider the Input as: “123” 
 then the output is Ouput: “123”, “132”, “213”, “231”, “312”, “321” Total = 6
Author = beniel
since : 10.03.2020
language : node js
*/
let input = ['a', 'b', 'c', 'd']
let output = []
let count = 0;

const fun = (input, k) => {
    if (k == input.length) {
        for (let i = 0; i < input.length; i++) {
            output.push(input[i])
        }
        console.log(output);
        count++;
        output = [];
    } else {
        for (let i = k; i < input.length; i++) {
            let temp = input[k];
            input[k] = input[i];
            input[i] = temp;

            fun(input, k + 1);

            temp = input[k];
            input[k] = input[i];
            input[i] = temp;
        }
    }
}
fun(input, 0);
console.log("Total combination for an given " + input + " is " + count);