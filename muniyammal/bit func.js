/*This program performs a Bitwise operation
*That displays a result to the standard output
*/
//comma operator when you want to include multiple expressions in a location that requires a single expression.
let And,Or,Xor,Not,ZeroRS,BitLS,BitRS;
//performs a bitwise AND operation of 5 is 0101 and 13 is 1101
And= 5 & 13;
//print the result is 0101 is 5
console.log(And);
//Bitwise OR operation 
Or= 5|13;
//prints the result as 13
console.log(Or);
//Bitwise NOT operation
Not=~9;
//prints the result as -10
console.log(Not);
//Bitwise leftshift operation
BitLS=9<<2;
console.log(BitLS);
//Bitwise XOR operation
Xor=14^9;
console.log(Xor);
//Bitwise Rightshift operation
BitRS=9>>2;
console.log(BitRS);
//Bitwise Rightshift with zero
ZeroRS=10>>>2;
console.log(ZeroRS);