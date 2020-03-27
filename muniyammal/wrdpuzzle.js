let a =[
    ["P", "S", "U", "W", "H", "A", "T", "S"],
    ["L", "P", "A", "C", "K", "A", "G", "E"],
    ["N", "Y", "O", "L", "R", "D", "V", "L"],
    ["F", "I", "N", "G", "E", "Z", "B", "M"],
    ["I", "R", "E", "H", "Q", "N", "J", "O"],
    ["A", "T", "B", "V", "G", "Y", "E", "S"],
    ["J", "D", "U", "W", "U", "E", "S", "T"],
    ["P", "S", "T", "I", "C", "K", "E", "Y"]
   ];
let b = ["stick", "most", "key", "yes","jhgh", "package", "tube", "target", "elm", "spy"];
let x =[-1, -1, -1, 0, 0, 1, 1, 1 ];  
let y = [ -1, 0, 1, -1, 1, -1, 0, 1 ];  
let i,row,col,flag,word=[];
for(i=0;i<b.length;i++){
    flag=0;
    for(row=0;row<8;row++){
        for(col=0;col<8;col++){
            if((a,b[i],row,col==1)){
            flag=1
            break;
            }
        }
       
    }
    if(flag==1)
    console.log(b[i] +  "  is present  ");
    else
    console.log(b[i] +  "  is not present  ");
}
function check(a,word,row,col){
if(a[row][col]!=word[0])
return 0;
    let len=word.length;
    for(let dir=0;dir<8;dir++){
        let k,rd=row+x[dir];
        let cd =col+y[dir];
        for(k=1;k<len;k++){
            if(rd>=8 ||rd<0 ||cd>=8 || cd<=0)
            break;
            if(a[rd][cd]!=word[k])
            break;
            rd+=x[dir];
            cd +=y[dir];
        }
        if (k==len);
         console.log('');
    }
    return 0;
}
return check;
