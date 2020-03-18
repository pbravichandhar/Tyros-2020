/**
*This program explaines the calculating total price in node java scripts 
*@author Arunkumar
*@version 1.0
*@since 05-03-2020
*/
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("product count :?",function(count){
      functionname(count-1);
});
let obj_name={     
    pname:[],
    pcost:[],
    pquantity:[],
};
let purchase=0;
function functionname(count) {
 r1.question("What is product name ? ", function(name) {
    r1.question("cost is :? ", function(cost) {
        r1.question("quantity is :? ", function(quantity) {
           obj_name.pname.push(name);
           obj_name.pcost.push(cost);
           obj_name.pquantity.push(quantity);
// calculate total price 
           purchase=purchase+(+cost)*(+quantity) ;
           functionname(count-1);   // recursive 
            if(count==0)
          { 
              for(let i=0;i<obj_name.pname.length;i++)
              {
                console.log("{");
                console.log("productname :" + obj_name.pname[i] + " quantity :" + obj_name.pquantity[i] + " cost " + obj_name.pcost[i]);
                console.log("}");  
              }
            
            console.log(purchase);  
            r1.close();
         } 
         
    });
 });
});

}
