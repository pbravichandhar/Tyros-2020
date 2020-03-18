/* To identify the vacancy of seats
in train*/
const readline=require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Enter the seat number:',(seat_number)=>{
   let  seat_pos = seat_number%8;
    switch(seat_pos){
        case 1:
        if((seat_pos==1)||(seat_pos==4)){
            console.log("Lower Berth");
            break;
        }
        case 2:
        if((seat_pos==2)||(seat_Pos==5)){
            console.log("Middle Berth");
            break;
        }
        case 3:
        if((seat_pos==3)||(seat_pos==6)){
            console.log("Upper Bearth");
            break;
        }
        case 4:
        if(seat_pos==7){
            console.log("Side Lower Bearth");
            break;
        }
        default:
        console.log("Upper Lower Bearth");
    }
});