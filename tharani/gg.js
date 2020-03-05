/*This program implements the function expression,closures and mimicking block scope 
*prints the standard result as a output.....
*/
//function expression
var globalThis=this;
function myFunc(){
    console.log('globalThis:',globalThis);
    console.log('myThis:',this);
    console.log(globalThis===this);
}
myFunc();
let p=Math.sqrt(49);
//calulate 2 times of 45
let y=Math.pow(2,45)
console.log(p);
console.log(y);
//iterative thinking......
function pow(x,n){
    let result=1;
    for (let i=0;i<n;i++)
    {
        result*=x;
    }
    return result;
}
console.log(pow(2,3));
//recursive thinking......
function recursiveReadLine(z,m){
    if(m==1)
    {
        return z;
    }else{
        //function call itself until the specified condition has been satisfied.....
        return z*recursiveReadLine(z,m-1);
    }
}
console.log(recursiveReadLine(2,3));
//linked list 
//let list={value:1,next:{value:2,next:{value:3,next:{value:4,next:null}}}};
let list={value:1};
//value1 is linked with value 2
list.next={value:2};
//value 1,2 is linked with value 3 in linked list
list.next.next={value:3};
list.next.next.next={value:4};
list.next.next.next.next=null;
console.log(list.next);
//lexical scoping..
//outter function .......
function init()
{
    let name="tharani";
    //displayName() inner function is returned from the outer function before being executed.
    function display(){
        console.log(name);
    }
    display();
}
init();
//closure...
function makeFunc(){
    let name='mozila';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let getFunc=makeFunc();
getFunc();
function makeAddr(e){
    console.log(e);
    return function(f){
        return e+f;
    }
}

let add5=makeAddr(5);
let add10=makeAddr(10);
console.log(add5(2));
console.log(add10(2));
//this object in javascript....
function setDisplay(){
     'use strict'
     return this;
    }
    console.log(setDisplay()===undefined);
    //block scope mimicking......
    function getElement(city){
        if(city=='bangalore'){(function(){
            var state="tamilnadu";
            let population=344566768;
            let language="kanada";
            console.log(city+" is state of:"+state+" population is :"  +population+"language is: "+language);
        }());
    }
    else{
        console.log("Invalid city");

    }
    }
 getElement("bangalore");
 //public static variable..
 function container(param){
     this.member=param;
     //return member;
 }
 let myContainer=new container("abc");
console.log(myContainer);
//exporting module...
let myModule=(function(){
    return{
        publicMethods:function(){
            console.log("Hello world");
        }
    };
})();
myModule.publicMethods();
//module pattern...
let myPattern=(function(){
    'use-strict'
    let _privateProperty="Hello world";
    let publicProperty="I am the public property";
    function _privateMethod(){
        console.log(_privateProperty);
    }
    function publicMethod(){
        _privateMethod();
    }
    return{
        publicMethod:publicMethod,
        publicProperty:publicProperty

    };
})();
myPattern.publicMethod(); // outputs 'Hello World'
console.log(myPattern.publicProperty); // outputs 'I am a public property'
console.log(myPattern._privateProperty); // is undefined protected by the module closure
//myPattern._privateMethod();
//module agumentation pattern....
let foo = {
    test: function() {
        console.log("hello");
        return 5;
    }
};

let bar = (function(val) {
    console.log("there")
    console.log("bar is", bar);
    return 5;
})(foo.test());
console.log("bar is", bar);