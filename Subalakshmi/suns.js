/*Given a number N, Find the number of ways to represent this number as a sum of 2 or
more consecutive natural numbers*/
function findConsecutive() 
{ 
    let N = 10; 
    let start = 1, end = (N+1)/2; 
    while (start < end) 
      { 
        let sum = 0; 
          for (let i = start; i <= end; i++) 
        { 
            sum = sum + i;  
            if (sum == N) 
            { 
                for (let j = start; j <= i; j++) 

                    console.log(j);
                    break; 

            } 

            if (sum > N) 

                break; 

        } 

        sum = 0; 

        start++; 

    } 
} 
console.log (findConsecutive()); 


 
