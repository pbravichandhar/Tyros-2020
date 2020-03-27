/**
 * Task 10 : sort the given array of elements
 * 
 * @author Akaash
 * @version 0.1
 * @since 13/03/2020
 */
let StringArray = ['pdf','milk', 'puffs', 'egg','bread','park']
let length = StringArray.length
while (length !== 0) {
    let updatedN = 0;
    for (let iterator = 1; iterator < length; iterator++) {
        if (StringArray[iterator] < StringArray[iterator - 1]) {
            let temp = StringArray[iterator];
            StringArray[iterator] = StringArray[iterator - 1];
            StringArray[iterator - 1] = temp;
            updatedN = iterat
        }
    }
    length = updatedN;
}

console.log(StringArray)