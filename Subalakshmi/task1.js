let n=10;
let count = Object. keys(n). length;
function num () {
       let c=[] ;
       let = new count[n + 1];  
        c[0] = c[1] = c[2] = 1; 
        c[3] = 2; 
        for (let i = 4; i <= n; i++) 
        {
            c[i] = c[i - 1] + c[i - 3]  
                    + c[i - 4]; 
        }
  
        return c[n]; 
    }
     console.log (count) ;
       
 
