function add (x, y) {
    return x + y
  }
  
  function addFive (x, addReference) {
    return addReference(x, 5) // 15 - Press the button, run the machine.
  }
  
 console.log( addFive(10, add))