/*This program implements primitive and reference value of the operation....
*prints the standard result as a output
*/
//determining the type of primitive value
let x=10;
console.log(typeof(x));
//determining the type of value
let z="js";
console.log(typeof(z));
//determining the type of reference value
let rgb=['red','blue','green'];
console.log(rgb instanceof Array);
var profile={
    firstname:'tharani',lastname:'murugesan',dob:'march,19,2020'
};
var aarthi=profile;
//change the object value
aarthi.firstname='aarthi';
console.log(profile);
console.log(aarthi);
//find the type of the reference value
console.log(typeof(profile));
//checks the reference value is in the object....
console.log(Object.is(profile,'tharani'));
//copying the primitive values....
let a=10;
//assign the a value to the b variable
let b=a;
//change the b variable value
b=20;
//it prints a value 
console.log(a);
//it prints b value as 20
console.log(b);
//copying the reference value...
// assign the object value = tharani
let n={name:'tharani'};
//assign the reference value n to reference value y
let y=n;
//change the reference value
y.name='aarthi';
//prints the reference value..
console.log(n.name);
let john={
    name:'john',sayJi:function(){
        console.log("Hi buddy");
    },age:24
};
john.sayJi();
//convert uppercase to lowercase strings....
let str="HELLO";
console.log(str.toLowerCase());
//convert lowercase to uppercase strings.....
let st="hello";
console.log(st.toUpperCase());
//toFixed to scale the number
let n1=1.23456;
console.log(n1.toFixed(1));
console.log(typeof new Number(0));
//covertone type of variable to another
let num=Number("123");
console.log(num);
//convert number to string
let sd=String(123);
console.log(sd);
//argument passing...as a callByValue
function callByValue(varOne,varTwo){
    console.log("Inside the call function");
    //local variables...
    varOne = 100; 
    varTwo = 200; 
    console.log("varOne =" + varOne +"varTwo =" +varTwo); 

}
let varOne = 10; 
let varTwo = 20; 
console.log("Before Call by Value Method"); 
console.log("varOne =" + varOne +"varTwo =" +varTwo); 
callByValue(varOne, varTwo); 
console.log("After Call by Value Method"); 
console.log("varOne =" + varOne +"varTwo =" +varTwo); 
//argument passing.... as a callByReference
function callByReference(varObj) { 
    console.log("Inside Call by Reference Method"); 
    //Assign the reference value to the object
    varObj.a = 100; 
    console.log(varObj); 
  } 
  let varObj = {a:1};
  console.log("Before Call by Reference Method"); 
  console.log(varObj);
  callByReference(varObj) 
  console.log("After Call by Reference Method"); 
  console.log(varObj);
  //dynamic properties 
  var obj={
      property1:'',property2:'',foo:function(){console.log("good");}
  };
  obj.property1="some values";
  obj.property2="some other values";
  console.log(obj.property1);
  console.log(obj.property2);
  obj.foo();
  //dynamically creating the objects..
  obj['property3']="some of values";
  console.log(obj);

