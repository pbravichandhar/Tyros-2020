let arr =['1','2','3','4']; 
let r = 3; 
let n = arr.length; 
let data =[];
let i, index=0;  
function combination(arr,r,data,i,n,index){
    if (index == r) 
        { 
            for (let j=0; j<r; j++) 
               console.log(data[j]+" "); 
            console.log(""); 
        }
        else if (i <= n) 
            data[index] = arr[i]; 
            combination(arr, n, r, index+1, data, i+1); 
            combination(arr, n, r, index, data, i+1);  
}
    function arrange(arr,n,r){
       let data = [r];
         combination(arr, data, 0, n, 0, r);
    }
    arrange(arr,n,r);