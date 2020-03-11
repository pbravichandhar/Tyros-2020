function onSuccess () {
    console.log('Success!')
  }
  
  function onError () {
    console.log('💩')
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
  
  promise.then(onSuccess)
  promise.catch(onError)
  