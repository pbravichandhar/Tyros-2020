let n = 4;
let symbol ='*';
let build =[];
function buildstair(n,symbol){
    for(i=1;i<=n;i++){
            build.push(symbol.repeat(i));
        for(k=i+1;k<=n;k++){
            build.push("?");
        }
     console.log(build);
    build =[];
    }
}
console.log("pattern("+ n +" , "+  symbol  +")");
buildstair(n,symbol);

