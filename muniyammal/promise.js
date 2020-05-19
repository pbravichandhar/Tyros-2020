//A promise is basically an advancement of callbacks.
//It is used to avoid the usage of more callback function in a program....

// promise example

function onSuccess(){
    console.log('I am a student')
}
function onFailure(){
    console.log('I am not a student')
    // throw new Error()
}
const promise = new Promise ((yes ,no)=>{
    setTimeout(()=>{
   yes()
    }, 1000)
});
promise.then(onSuccess)
promise.catch(onFailure)


//chain promise example   

function getChain(){                             //chain promise is created for nested promise function
    return new Promise((reject)=>{
        setTimeout(reject ,3000)
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
      .then(chip1)                                // the content from the resolve() is here
      .then(chip2)
      .then(chip3)
      .catch(chipError)                           //the info from the reject() is here

      //bluebird promise : 
      //Bluebird is a fully-featured Promise library for JavaScript.
      // The strongest feature of Bluebird is that it allows you to "promisify" other Node modules in order to use them asynchronously.
      let array1 = ['aba','xzxb','aba','baba']
let array2 = ['aba','xzxb','ab']

let wordCount = 0

if(wordCount < array2.length){
    let count = 0
    for(let arr1=0;arr1<array1.length;arr1++) {
        if(array1[arr1] == array2[wordCount]) {
            count+=1
        }
    }
    console.log(count)
    wordCount += 1
}