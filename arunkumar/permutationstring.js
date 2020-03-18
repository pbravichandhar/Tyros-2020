/**
* This program explaines the concepts of string permutations in java scripts 
*@author Arunkumar
*@version 1.0
*@since 10-03-2020
*/
let name="abcd",i;
let fact=1;
const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
     (acc, letter, i) =>
     acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),[]
    );
 };
console.log(stringPermutations(name));
for(i=1;i<=name.length;i++){    
  fact=fact*i;    
}  
console.log(" number of possible combinations:"+fact);
