function getPromise () {
    return new Promise((resolve) => {
      setTimeout(resolve, 5000)
    })
  }
  function funA () {
    console.log('A')
  }
   function funB () {
    console.log('B')
  }
  function funCAndThrow () {
    console.log('C')
  
    throw new Error()
  }
  function catchError () {
    console.log('Error!')
  }
  
  getPromise()
    .then(logA) // A
    .then(logB) // B
    .then(logCAndThrow) // C
    .catch(catchError) 
