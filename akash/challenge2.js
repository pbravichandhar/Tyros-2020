/**
 * The combinations of how many times the given input can be rearranged and its count
 * Input : 1234
 * Output : The combinations are 2,3,4,1
    The combinations are 3,4,1,2
    The combinations are 4,1,2,3
    The combinations are 1,2,3,4
    The total count of combinations is 4

    @author Akaash
    @version 0.1
    @since 10/03/2020
 */
let input = "1234"
let array = []
let count = 0

if(input == ""){
    console.log("Please enter valid input")
}

for (let j=0;j<input.length;j++){
    array.push(input.charAt(j))
}

//swapping the array of the string elements
for(let i = 1; i <= array.length; i++){
    for(let j=0;j<input.length-1;j++){
        let temp = array[j]
        array[j]= array[j+1]
        array[j+1] = temp
    }
    console.log("The combinations are "+array)
    count = count + 1
}
console.log("The total count of combinations is "+count)

