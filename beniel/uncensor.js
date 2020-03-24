/**
 * @author:beniel
 * @since:11-03-2020
 * @version:12.16
 * program description :
 *        To replace the uncensored character in a string 
 *        For example 
 *               uncensor("$PP$RC$S$", "UEAE") ➞ "UPPERCASE"
 *        
 */

let censored_array;
let missing_words;
censored_array="$PP$RC$S$$$"
missing_words="UEAE"
let uncensored_word =[];
let iteration=0;
for(let index=0;index<censored_array.length;index++)
{
    if(censored_array.charAt(index)=='$')
    {
        uncensored_word.push(missing_words[iteration]);
        iteration++;
    }
    else{
        uncensored_word.push(censored_array[index]);
    }
}
console.log(uncensored_word.join(""));
