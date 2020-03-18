/**
* sum of consecutive numbers in java scripts 
*
*@author Arunkumar
*@version 1.0
*@since 26-02-2020 
*/
let half,l=0;
let start = 1;
let num =25,str_name;
half=num+1;
let end = half/2;
let chuncks,new_value;
console.log("Sequence of consecutive numbers that sum:"+num);
printConsequtiveSum(num);  
function printConsequtiveSum(num)
{
 while (start < end){
   let sum = 0;
   let arr_name=[];
   let total="";
   for (let repetition= start; repetition <= end; repetition++){
      sum = sum + repetition;
      if (sum == num){ 
         
         for (let recurrence= start; recurrence<= repetition; recurrence++)
            arr_name.push(recurrence);
            arr_name.forEach(function(element){
             total+=element;
             
            });
             str_name = total;
            if(arr_name[l]<10)
            {
            chuncks = str_name.match(/.{1}/g);
             new_value = chuncks.join("+");
            }
            else {
             chuncks = str_name.match(/.{2}/g);
             new_value = chuncks.join("+");
            }
            
            console.log(new_value);
                 
            break;
            l++;
      }
      if (sum > num)
         break;
   }
   sum = 0;
   start++;
 }
 
 
}
console.log("count is :"+ count);