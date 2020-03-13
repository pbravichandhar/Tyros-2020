const a =arrange. createInterface({
    input : process . stdin,
    output : process . stdout
    })
    a.question("enter the number",(n)=>{
let temp,i,j;
        let limit = (num / 2);
        for(i = 1 ; i <= limit ; i++)
        {
            temp = num;
            j = i;
            while(j < temp)
            {
                temp = temp - j;
                j++;
            }
            if(j == temp)
            {
                count++;
            }
        }
    }



console.log ("count"+ count);
})