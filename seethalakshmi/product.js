let Products ={
    Product_name : "",
    Quantity : "",
    Product_price : "",
};
const readline = require ('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});
rl.question('Enter the product name:',(Name)=>{
    Products.Product_name =Name;
  rl.question('Enter the total quantity of each product:',(quantity)=>{
    Products.Quantity = quantity;
    rl.question('Enter the price of each product:',(price)=>{
        Products.Product_price = price;
        Total();
        rl.close();
});
});
});
let Total = function(){
    console.log(Products.Quantity*Products.Product_price);
}
console.log(Total(Products.Quantity));