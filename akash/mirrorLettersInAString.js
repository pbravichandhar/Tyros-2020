/**
 * This program performs an operation to convert the input string letters to their mirror letters.
 * 
 * @author Akaash
 * @version 1.0
 * @since 28-02-2020
 */

// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please Enter a String:");

// When user input data and click enter key.
standard_input.on('data', function (data, inputString) {
 
    //Assigning the user input to the stdin data  
    inputString = data;


    //storing the reverse of the alphabets in a string
    const reveresedString = "zyxvutsrqponmlkjihgfedcba";

    //storing the reverse of the capital alphabet letters
    const capitalReversedString = "ZYXVUTSRQPONMLKJIHGFEDCBA";

    //getting the length of the input string
    let length = inputString.length;
    let mirroredString = "";
 
    //Mirroring the input string and storing the result in a string called mirroredString
    for(let j=0; j < length; j++){
        if(inputString.charAt(j) >= 'a' && inputString.charAt(j) <= 'z'){
            mirroredString += reveresedString.charAt(inputString.charCodeAt(j) - 97);
        }
        else if(inputString.charAt(j) >= 'A' && inputString.charAt(j) <= 'Z'){
            mirroredString += capitalReversedString.charAt(inputString.charCodeAt(j) - 65);
        }else{
            mirroredString += inputString.charAt(j);
        }
    }
 
    //printing out the mirroredString as output
    console.log(mirroredString);

    //This part is to get out of the program by typing exit in the terminal
    if(data.toLowerCase() == "exit\n") process.exit();
});
