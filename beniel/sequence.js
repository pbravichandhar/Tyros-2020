let input_number=55;
let end=input_number/2;
let total=0;
let display_array=[];
end=Math.round(end);
let count =0;
for(let start=1;start<end;start++)
{
    let index=start;
    while(index<=end)
    {
        total+=index;
        if(total==input_number)
        {
            for(let print=start;print<=index;print++){
                display_array.push(print);
            }
            console.log(display_array.join('+'));
            display_array=[];
            count++;
            break;
        }
        if(total>input_number)
        {
            break;
        }
        index++;
    }
    total=0;
}
console.log("There are "+count+" way to represent the sum of consecutive number "+input_number);
