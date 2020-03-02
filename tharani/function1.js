/*This program implements functions in javascript
*prints the standard result as a output
*/
//global variable
var name="Tharani";
//function with no arguments
function showMessage(){
    console.log("Hiii hello how are you!" + name);

}
//function call
showMessage();
//function with arguments
function myMessage(to, text){
    console.log(to +':'+text);
}
 myMessage('ann','hello');
 //function with arguments as a text
 function myShape(from,text1="No text is given"){
     console.log(from +':'+text1);
 }
 myShape('ann');
 function showMessage1(from1,text2)
 {
     //OR condition executes either any one is true prints true as a result
     text2=text2 || 'no text is given';
    console.log(from1 +':'+text2);
 }
 showMessage1('hai');
 //function returns a value to the variable
 function sum(a,b)
 {
     return a+b;
 }
 let result=sum(10,20);
 //prints the result 
 console.log(result);
 //get the input from the user......
 var standard_input=process.stdin;
 standard_input.setEncoding('utf-8');
 console.log("How old are you");
 //pass the input to the function...
 standard_input.on('data',function(data){
    function checkAge(data)
    {
        if(data>18)
        {
            return true;
        }
            else{
                return false;
            }
        
    }
    //check the returned value in if conditon 
    if (checkAge(data))
    {
        console.log("Access granded");
    }
    else{
        console.log("Access denied");
    }
    

 });

