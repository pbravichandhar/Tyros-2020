function add (x, y) {
    return x + y
  }
  
  function addFive (x, addReference) {
    return addReference(x, 5)   }        
  console.log(addFive(10, add));  // callback function