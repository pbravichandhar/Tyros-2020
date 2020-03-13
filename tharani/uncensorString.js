/*This program implements the regular expression for a string
*prints the standard result as a output
*/
let name="$PP$RC$S$";
let dollar =  /[$]/
let word = 'UEAE'
let result = ''

//logic for uncensoring a string
function uncensorString(name) {
    let j = 0
    let i=0
    //checks the length of the string 
    while(i < name.length){
        //match the each character with dollar variable 
        if(name.charAt(i).match(dollar)){
            //replace a dollar character  
            result += word.charAt(j).replace(name.charAt(i)) 
            j++
            }else{
                //place the original character as a result
            result += name.charAt(i)
        }
        //increments the length of the string.
        i++;
    }
    console.log("The result string is "+result);
}
uncensorString(name);





