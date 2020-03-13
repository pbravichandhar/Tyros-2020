/*This program implements railway seat type 
*whether it is upper or lower or middle
*prints the standard result as a output
*/
const readline=require('readline');
const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//let seatNumber;
let result;
//function getSeatNumber(){
    //get the seat number
input.question("Enter the seat number:",(number)=>{
    //find the seat number is available or not
    if((number>=1)&&(number<=70)){
        //calculation of the seat number
        if(number%8==1||number%8==4){
            result=number%8;
            findBerthType(result);
        }else if(number%8==2||number%8==5){
            result=number%8;
            findBerthType(result);
        }else if(number%8==3||number%8==6){
            result=number%8;
            findBerthType(result);
            }
    else{
        console.log("Enter the valid seat number:");
            //getSeatNumber(valid);
    //});
    }
}
});
//}
function findBerthType(result){
    //using the switch case statements to find the berth type
    switch(result){
        case 1:
            console.log("Your safty berth is lower berth!!!");
            break;
        case 2:
            console.log("Your safty berth is middle berth!!!");
            break;
        case 3:
            console.log("Your safty berth is upper berth!!!");
            break;
        case 4:
            console.log("Your safty berth is lower berth!!!");
            break;
        case 5:
            console.log("Your safty berth is middle berth!!!");
            break;
        case 6:
            console.log("Your safty berth is upper berth!!!");
            break;
        default:
            console.log("Invalid seat number");
            break;
        }

}
