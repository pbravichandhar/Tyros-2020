const seat= require("readline")
const s =seat.createInterface({
    input : process.stdin,
    output : process.stdout
})
s.question("enter the seat number",(number)=>{
let n = number % 8;
if (n > 0 && n < 70)
   if(n==1 || n==4) {
       console.log('lower berth');
   }
   else if (n==2 || n==5) {
        console.log('middle berth');
   }
   else if (n==3 || n==6) {
       console.log('upper berth');
   }
   else if (n==7) {
       console.log('side lower berth');
   }
   else {
       console.log('side upper berth');
   }
   else { 
       console.log('invalid seat number');
   }
   s.close();
})