
const readline = require('readline')
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function driverFunction(){
    read.question('Enter a string :', (string) => {
        if(string == '') {
            console.log("Please enter valid input")
            driverFunction()
        }else{
            uncensor(string)
            read.close()
        }
    })
}

//Regular Expression for special characters
let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
let string2 = 'UEAE'
let output = ''

//logic for uncensoring a string
function uncensor(string) {
    let j = 0
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i).match(format)){
            output += string2.charAt(j).replace(string.charAt(i)) 
            j++
            if(j == string2.length) {
                j = 0
            }
        }else{
            output += string.charAt(i)
        }
    }
    console.log("The censored string is "+output)
}

driverFunction()







