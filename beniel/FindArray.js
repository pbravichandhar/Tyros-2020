/**
 * 
 * @author: beniel
 * @since:17-03-2020
 * @version:1.0
 */
let main=["aba","baba","xzxb","aba"]
let sub=["aba","xzxb","ab"]
let count;
for(let index=0;index<sub.length;index++)
{ 
    count=0;
    for(let iteration=0;iteration<main.length;iteration++)
    {
        if(sub[index]==main[iteration])
        {
            count++;
        }
    }
    console.log(count)
}