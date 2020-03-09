function onSuccess(){
    console.log('I am a student')
}
function onFailure(){
    console.log('I am not a student')
    throw new Error()
}
const promise = new Promise ((yes ,no)=>{
    setTimeout(()=>{
       no()
    }, 1000)
});
promise.then(onSuccess)
promise.catch(onFailure)
