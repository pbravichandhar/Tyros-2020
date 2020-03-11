let arr1=['suba','ananthi','vijay'];
let arr2=[];
let min=arr1[0];
let pos;
let max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (let i=0;i<arr1.length;i++)
{
        for (let j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);
