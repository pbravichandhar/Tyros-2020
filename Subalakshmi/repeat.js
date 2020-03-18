let a=["aba","baba","xzxb","aba"]
let b=["aba","xzxb","ab"]
let count;
for(let i=0;i<b.length;i++)
{ 
    count=0;
    for(let j=0;j<a.length;j++)
    {
        if(b[i]==a[j])
        {
            count++;
        }
    }
    console.log(count)
} 