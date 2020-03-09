/**
 * Task 5 : Calculating total price of the purchased products
 * 
 * @author Akaash
 * @version 1.0
 * @since 05/03/2020
 */
const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let productList = []

const retry = function(){
    read.question('Enter the no of products:', (productCount) => {
        if(isNaN(parseInt(productCount))){
            console.log("Please enter valid count for products")
            retry()
        }else{
            getProductDetails(productCount - 1)
        }
    })
}

//getting input from the user for the list of products
function getProductDetails(productCount) {
    read.question('Enter the product name:', (productName) => {
        read.question('Enter the quantity:', (quantity) => {
            // console.log(parseInt(quantity))
            if(isNaN(parseInt(quantity))){
                console.log("Please Enter valid quantity value..!")
                getProductDetails(productCount)
            }else{
                read.question('Enter the price:', (price) => {
                    // console.log(parseInt(price))
                    if(isNaN(parseInt(price))){
                        console.log("Please Enter valid Price value..!")
                        getProductDetails(productCount)
                    }else{
                        productList.push({
                            'name': productName,
                            'quantity': quantity,
                            'price': price
                        })
                        getProductDetails(productCount - 1)
        
                        if (productCount == 0) {
                            console.log(productList)
                            calculatePrice() //Calculate total price
                            read.close()
                        }
                    }
                })
            }
        })
    })
}

//Method to calculate the total price
function calculatePrice() {
    let totalPrice = 0;
    for (let i = 0; i < productList.length; i++) {
        // if(typeof productList[i].quantity == 'number' && typeof productList[i].price == 'number'){
        totalPrice += productList[i].quantity * productList[i].price
        //     }else{
        //         console.log("please enter valid quantity and price")
        //         return
        //    }
    }
    console.log("The total price is " + totalPrice)
}
//Overall function call
retry()
