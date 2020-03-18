const read = require('readline');
const r = read.createInterface({
    input: process.stdin,
    output: process.stdout
});
let obj = { product: [], quantity: [], price: [] };
let total = 0;
r.question("enter number of items you want to purchase :", function(count) {
    methodi(count - 1);
})

function methodi(count) {
    r.question("enter the product name  ", function(pname) {
        r.question("enter the quantity of the item ", function(pquantity) {
            r.question("enter the price of the item ", function(itemprice) {
                obj.product.push(pname);
                obj.quantity.push(pquantity);
                obj.price.push(itemprice);
                total = total + (+pquantity) * (+itemprice); // calculate total value of purchased item's
                methodi(count - 1);
                if (count == 0) {
                    for (let i = 0; i < obj.price.length; i++) {
                        console.log(" { ");
                        console.log("product :" + obj.product[i] + " quantity :" + obj.quantity[i] + " price " + obj.price[i]);
                        console.log("}");
                    }
                    console.log("  ->  " + total);
                    r.close();
                }
            })
        })
    })
}