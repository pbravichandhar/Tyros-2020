/**
 *Function Expressions in JS
 * 
 *@author Akaash
 *@version 1.0
 *@since 04/03/2020
 */

function makeAdd(x) {
  //closure function => function inside a function
  return function add(y) {
    return x + y
  }
}

let addNumberTwo = makeAdd(10)
console.log(addNumberTwo(2))

//this Keyword
let object1 = {
  name: "Akaash", printName: function () {
    console.log(this.name)
  }
}
object1.printName()

//Block scope mimicking
function function1() {
  var name1 = "Akaash" //function scope for var
  let name2 = "Arun" //local scope
  const name3 = "benial" //loccal scope

  function function2() {
    console.log(name1)
    console.log(name2)
    console.log(name3)
  }
  function2()
}
function1()

function scope() {
  if (true) {
    var value = 12 // function scope
    let value2 = 15 // Block scope inside of if loop
    const value3 = 17 // const also has block scope
  }
  console.log(value) // prints 12
  // console.log(value2) //error undefinded
  // console.log(value3) //error undefinded
}
scope()

//Module pattern
let myModule = (function () {
  //private variable
  let privateproperty = 'This is private'

  //private Method
  function privateMethod() {
    console.log(privateproperty)
  }
  return {
    publicMethod: function () {
      privateMethod()
    }
  }
})();

myModule.publicMethod()






