let input = "Test";
let output = [];
function printPermutations(input, prefix){
  if(input.length === 0){
     output.push(prefix);
  }else{
     for(let i=0; i < input.length; i++){
       let reminder = input.substring(0, i) + input.substring(i+1);
       printPermutations(reminder, prefix+input.charAt(i));
     }

}
printPermutations(input, "");
console.log(output);
console.log("Length: 4! :"+ output.length);
