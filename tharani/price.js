const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let product = []

//getting input from the user for the list of products
function getDetails(Count) {
    read.question('Enter the product name:', (productName) => {
        read.question('Enter the quantity:', (quantity) => {
             read.question('Enter the price:', (price) => {
                     product.push({
                            'name': productName,
                            'quantity': quantity,
                            'price': price
                        });
                        getDetails(Count - 1)
        
                        if (Count == 0) {
                            console.log(product);
                            calculatePrice() //Calculate total price
                            read.close()
                        }
                    });
               });
            });
}

//Method to calculate the total price
function calculatePrice() {
    let totalPrice = 0;
    for (let i = 0; i < product.length; i++) {
        // if(typeof productList[i].quantity == 'number' && typeof productList[i].price == 'number'){
        totalPrice += product[i].quantity * product[i].price
        //     }else{
        //         console.log("please enter valid quantity and price")
        //         return
        //    }
    }
    console.log("The total price is " + totalPrice)
}