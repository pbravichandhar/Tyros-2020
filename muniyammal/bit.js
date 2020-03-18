/*This program performs a Bitwise operation
*That displays a result to the standard output
*/
//comma operator when you want to include multiple expressions in a location that requires a single expression.
let a,b,c,d,e,f,a1;
//performs a bitwise AND operation of 5 is 0101 and 13 is 1101
a= 5 & 13;
//print the result is 0101 is 5
console.log(a);
//Bitwise OR operation 
b= 5|13;
//prints the result as 13
console.log(b);
//Bitwise NOT operation
c=~9;
//prints the result as -10
console.log(c);
//Bitwise leftshift operation
d=9<<2;
console.log(d);
//Bitwise XOR operation
a1=14^9;
console.log(a1);
//Bitwise Rightshift operation
e=9>>2;
console.log(e);
//Bitwise Rightshift with zero
f=10>>>2;
console.log(f);