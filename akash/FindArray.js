let array1 = ['aba','xzxb','aba','baba']
let array2 = ['aba','xzxb','ab']

let wordCount = 0

while (wordCount < array2.length){
    let count = 0
    for(let arr1=0;arr1<array1.length;arr1++) {
        if(array1[arr1] == array2[wordCount]) {
            count+=1
        }
    }
    console.log(array2[wordCount]+" has appeared "+count+" times")
    wordCount += 1
}

