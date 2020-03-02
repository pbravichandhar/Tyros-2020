/*This program implements null,typeof,undefined keywords
*prints the standard result as a output
*/
//a is number variable assign the value to the variable is 10
var a=10;
//string
var b="This is a string literal";
//string object
var stringname=new String("string literal");
//prints the string object
console.log(stringname);
var c=12.4;
var result =(typeof a =="number");
console.log(result);
//it returns boolean value either true or false as a output
var res=(typeof b=="number");
console.log(res);
var r=(typeof c=="number");
console.log(r);
//typeof operator
console.log(typeof(a));
console.log(typeof(c));
console.log(typeof(b));
//object in javascript
var stu;
stu={id:1600049,name:"tharani",salary:40000};
console.log(stu.id+"\n "+stu.name+"\n "+stu.salary);
//value is not assigned to the variable it prints the result as undefined
var v;
console.log(v);
//value of the variable is assigned to null
var w=null;
//prints null as a output
console.log(w);
//reserved word are words that you cannot use as a identifier
var case =10;
//it prints error:unexpected token 'case' as a output
console.log(case);
