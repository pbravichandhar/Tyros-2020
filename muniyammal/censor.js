let a = [];
let b =[];
let c =[];
a = "c@libra$n@";
b = "lib";
let count=0;
let array_size = a.length;
let b_len = b.length;
function uncensor(a,b){
 for(let first =0;first< array_size;first++){
     if((a.charAt(first)=="$")||(a.charAt(first)=="@")){
        c.push(b[count]);
        count++;
     }
     else{
        c.push(a[first]);
     }
 }
 console.log(c);
 
}
uncensor(a,b);


