let num=10;
let temp,i,j,count;
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
console.log("count"+count);
}