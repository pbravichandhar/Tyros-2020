/*This program implements the building blocks of pattern
*given range of input prints the pattern 
*remaining place prints the '-' pattern
*prints the stamdard result as a output
*/
const readline=require('readline');
const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let inputArray=[];
//get the range of the pattern
input.question("Enter the range :",(range)=>{
    //get the pattern to print as a result
    input.question("Enter pattern to be printed:",(pattern)=>{
        let i=0;
        while(i<range){
            let j=0;
            while(j<=i){
                //push the pattern into the empty array
                inputArray.push(pattern);
                j++;
            }
            let k=i+1;
            while(k<range){
                //remaing spaces prints the '-' pattern
                inputArray.push('-');
                k++;
            }
            //prints the inputArray
            console.log(inputArray);
            //empty the inputArray
            inputArray=[];
            i++;
        }
        //onsole.log(inputArray);
        //close the program
        input.close();
        
    });

});
