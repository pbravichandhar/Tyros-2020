let A = "12345";
let B = A.length;
let line,row,i,j;
function Permute (line,row){
    if(line==row){
        console.log(A);
    }
    else{
        for(i=line ;i<= row ;i++){
        let temp = A[line];
        A[line] = A[line+1];
        a[line+1] = temp;
        Permute(a,line,row)   ;
        }
    }  
}

