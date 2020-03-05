/**
 * Task 5 : Calculating total price of the purchased products
 * 
 * @author Akaash
 * @version 1.0
 * @since 05/03/2020
 */
const readline = require('readline')

const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let productList = []

read.question('Enter the no of products:',(productCount)=>{
    getProductDetails(productCount-1)
})

//getting input from the user for the list of products
function getProductDetails(productCount){
    read.question('Enter the product name:',(productName)=>{
        read.question('Enter the quantity:',(quantity)=>{
            read.question('Enter the price:',(price)=>{
                productList.push({
                    'name' : productName,
                    'quantity' : quantity,
                    'price' : price
                })
                getProductDetails(productCount-1)
                        
                if(productCount == 0){
                    console.log(productList)
                    calculatePrice() //Calculate total price
                    read.close()
                }
            })
        })
    })
}

//Method to calculate the total price
function calculatePrice(){
    let totalPrice = 0;
    for(let i = 0;i < productList.length;i++){
       // if(typeof productList[i].quantity == 'number' && typeof productList[i].price == 'number'){
            totalPrice += productList[i].quantity * productList[i].price
    //     }else{
    //         console.log("please enter valid quantity and price")
    //         return
    //    }
    }
    console.log("The total price is "+totalPrice)
}
