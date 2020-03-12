const readline = require('readline')

const input= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//details is the empty array
let Details=[];
/*let Details={
    pdt_name:'',
    pdt_quantity:"",
    pdt_price:""
};*/
//function getDetails(){
    //get the no of products from the user
    input.question("Enter the no of products",(count)=>{
       setDetails(count-1);

    });
//}
//get the product details from the user
function setDetails(count){
    //for(let i=0;i<count;i++){
        input.question("Enter the product name:",(name)=>{
            //Details.pdt_name=name;
            input.question("Enter the product quantity: ",(quantity)=>{
               // Details.pdt_quantity=quantity;
                input.question("Enter the product price :",(price)=>{
                  //  Details.pdt_price=price;
                  Details.push({
                     'pdt_name':name,
                      'pdt_quantity':quantity,
                      'pdt_price':price

                  })
                    setDetails(count-1);
                  // calculatePrice(pdt_quantity,pdt_price);
                   if(count==0){
                      // console.log(Details);
                       calculatePrice();
                       input.close();
                   }
                });

            });
        });
    //}
}
//calculate the totalprice of the product........

function calculatePrice(){
    let totalCost=0;
    for(let j=0;j<Details.length;j++){
        totalCost+=Details[j].pdt_quantity*Details[j].pdt_price;
    }
     console.log("the total cost is "+ totalCost);
}
                           