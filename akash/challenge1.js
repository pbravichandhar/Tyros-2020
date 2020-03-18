const number = 15
let count = 1
let sum = 0

if(number <= 0) {
    console.log('please enter valid number')
}
function sumofNumbers(iterator){
    let sum = 0
    let numbersArray = []
    for (let numberCount = iterator; numberCount <= 9; numberCount++) {
        sum += numberCount
        numbersArray.push(numberCount)
        if (sum == number) {
            console.log(numbersArray)
        }
        sumofNumbers(numberCount + 1)
    }
}
let iterator = 0

sumofNumbers(iterator)

