let a = ['1','5','1','3'];
let b = ['1','5','2'];

let count =0;
while(count<b.length){
    let c=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b[count]){
            c=c+1;
        }
    }
    console.log(+  c);
   count=count+1;
}