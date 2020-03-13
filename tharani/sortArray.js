/*This program implements the sorting of array names
*Prints the standard result as a output
*sort the array of elements using sorting....
*/
let input=['apple','puffs','pizza','biscuits','chocolates'];
let sortArray=[];
//get the elements and push it into the sortArray
for (let i=0;i<input.length;i++){
    sortArray.push(input[i]);
}
//prints the array of elements...
console.log(sortArray);
//sort the array of elements using temp variable
for(let j=1;j<sortArray.length;j++){
    for(let k=j;k<sortArray.length;k++){
        //checks the each name with every other names.....
        if(sortArray[k]<=sortArray[j])
        {
        temp=sortArray[j];
        sortArray[j]=sortArray[k];
        sortArray[k]=temp;
        }
    }
}
//prints sorted array.......
console.log(sortArray);
