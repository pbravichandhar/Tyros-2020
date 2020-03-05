function closure()  
{
    let array = [];
    let i;
    for (i = 0; i < 5; i++)  
    {
        // storing anonymus function
        array[i] = function () { return i; }
    }
 
    // returning the arrayay.
    return array;
}
 
let get_array = new closure();
 
console.log(get_array[0]());
console.log(get_array[1]());
console.log(get_array[2]());
console.log(get_array[3]()); 
console.log(get_array[4]());

