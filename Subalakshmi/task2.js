const arrange = require("readline")
const a =arrange. createInterface({
input : process . stdin,
output : process . stdout
})
a.question("enter the no of elements",(n)=>{
let count = 0;
const arrange = (n,c)=> {
if (c == n.length)
{
for (let i = 0; i < n.length; i++)
{
console.log(" [" + n[i] + "] ");
}
count++;
}
else
{
for (let i = c; i < n.length; i++)
{
let temp = n[c];
n[c] = n[i];
n[i] = temp;

arrange(n, c + 1);

temp = n[c];
n[c] = n[i];
n[i] = temp;
}
}
}
arrange(n,0);
console.log("combination of the elements" + n + "are" + count);
a.close();
})