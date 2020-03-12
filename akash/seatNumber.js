/**
 * Task 8 : Railway seat problem
 * 
 * @author Akaash
 * @version 0.1
 * @since 10/03/2020
 */

const readline = require('readline')
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function driverFunction(){
    read.question('Enter a valid seat number :', seatNumber => {
        findSeatNumber(seatNumber)
        read.close()   
    })
}

//logic to find the berth of the corresponding seat number
function findSeatNumber(seatNumber) {
    if(seatNumber > 0 && seatNumber < 71){
        if (seatNumber % 8 == 1 || seatNumber % 8 == 4){
            console.log('Your berth is Lower')
        }else if (seatNumber % 8 == 2 || seatNumber % 8 == 5){
            console.log('Your beth is Middle')
        }else if (seatNumber % 8 == 3 || seatNumber % 8 == 6){
            console.log('Your berth is Upper')
        }else {
            console.log('No seat number available')
        }
    }else{
        console.log('Please enter a valid seat number')
        driverFunction()
    }
}

driverFunction()