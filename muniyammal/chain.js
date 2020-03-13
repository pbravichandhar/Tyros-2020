function getChain(){
    return new Promise((reject)=>{
        setTimeout(reject ,1000)
    })
}
function chip1(){
    console.log('nano');
}
function chip2(){
    console.log('micro');
}
function chip3(){
    console.log('macro');

    throw new Error()
}
function chipError(){
    console.log('size is not defined');
}
getChain()
      .then(chip1)
      .then(chip2)
      .then(chip3)
      //.catch(chipError)