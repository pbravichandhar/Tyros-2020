/*This program performs a addition operation
*prints the standard result as a output
*/
var height = 5;
var radius = 3;
var volume;
// declare and immediately call anonymous function to create scope
(function () {/*from w  w  w  . j  av a  2 s  . c  o m*/
    //calculate the volume of the cone
     var pir2 = Math.PI * radius * radius;   // temp var
     volume = (pir2 * height) / 3;
})();
//prints the volume of the cone
console.log(volume);
//function scope
var pet="cat";
function myMethod(){
    var pet="dog";
    console.log(pet);
}
myMethod();
console.log(pet);
//assign the variable to the function
var x=function(a,b){
    return a+b;
}
console.log(x(10,20));

