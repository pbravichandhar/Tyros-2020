/*This program performs looping statements 
*and condition statements of particular operation
*prints the standard result as a output
*/
var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

var a=20;
if(a>10)
{
    console.log("The value is greater than 20");
}
var hour=18;
if(hour<18){
    var greetings="Good day";
    console.log(greetings);
}else{
     var greetings="Good evening";
     console.log(greetings);
}
console.log("Please enter the time.");
standard_input.on('data', function (data) {
 // User input exit.
 if(data<10){
    // Program exit.
    console.log("Good morning");
    process.exit();
}else if(data<20)
{
    // Print user input in console.
    console.log("Good day");
}else{
    console.log("Good Evening");
}
});
console.log("for loop......");
for(var i=1;i<=5;i++)
{

    console.log(i);
}
console.log("while loop.....");
var j=3;
while(j<=5)
{
    console.log(j);
    j++;
}
console.log("do-while........");
var b=21;
do{
    console.log(b);
    b++;
}while(b<25);
console.log("Labeled statements......");
//labeled statement
var a1=1;
markloop:
while(a1==1)
{
    console.log("good......");
    //break statement.........
    break;
}
//switch statement......
console.log("Switch statement.........");
var text;
var fruits=process.stdin;
fruits.setEncoding('utf-8');
console.log("Enter the fruit name:");
fruits.on('data', function (data) {
    switch(fruits) {
        case "Banana":
          text = "Banana is good!";
          console.log(text);
          break;
        case "Orange":
          text = "I am not a fan of orange.";
          console.log(text);
          break;
        case "Apple":
          text = "How you like them apples?";
          console.log(text);
          break;
        default:
          text = "I have never heard of that fruit...";
          console.log(text);
      }
    });
      

