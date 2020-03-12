
const a =arrange. createInterface({
    input : process . stdin,
    output : process . stdout
    })
    a.question("enter the number",(a)=>{
           let b = '';
let c = '';
let n = '';
function consecutive( b , c){
    console.log(c++);
    for (let x = c ;x <= b ;x++)
    console.log(x);
}
function sum (n){
    for ( b=1; b<n; b++) 
        { 
            for (c=0; c<b; c++) 
            { 
                if (2*n == (b-c)*(b+ c+1)) 
                {
                    console.log(n+ "=");
                    consecutive(b , c+1);

                }
            }
        }
 }
 sum(22);