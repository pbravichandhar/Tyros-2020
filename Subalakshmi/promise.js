const promise = new Promise ((resolve,reject)=>
{
   setTimeout (() => { resolve() }, 2000)

})
console.log('the prmise will be called',promise);
setTimeout(()=>{console.log('the promise call',promise)},2000)