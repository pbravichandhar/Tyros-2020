/**
 * @author:beniel
 * @since:11-03-2020
 * @version:12.16
 * program description :
 *        Example

      masteCode({
        name: "Matt",
        surname: "Edabit",
        gender: "M",
        dob: "1/1/1900"
        }) ➞ "DBTMTT00A01"
 *        
 */
let output = [];
let input= {
    name: "Helen",
    surname: "uy",
    gender: "F",
    dob: "1/1/1950"
  }
output.push(encryption_surename(input.surname))
output.push(encryption_name(input.name))
output.push(year());
output.push(dateof());
function dateof()
{
    let date=input.dob.split("/");
    if(input.gender=='M'){
        if(date[0]>0 && date[0] <10){
          date[0]='0'+ date[0];
        }
    }
    else
    {
        date[0]=40+(+date[0]);
    }
    return date[0]; 
}
// function for create encrypt text from sure name
function encryption_surename(string_input)
{
    let string;
    if(string_input.length>3)
    {
        string=removelvowels(string_input)   
        if(string.length < 3)
        {
            let substring;
            substring=removeconsonant(string_input);
            for(let index=0;index<=3-(string.length);index++)
            {
                string+=substring[index];
            }
            
        }
        else
        {
            string=string.substring(0,3);
        }
    }
    else
    {
        string=removelvowels(string_input)
        let sub=removeconsonant(string_input)
        string=string+sub;
        for(let index=0;index<=3-(string.length);index++)
        {
            string+='x';
        }
    }
    string = string.toUpperCase()
    return string;
}

function removelvowels(char)
{
    char=char.replace(/a|e|i|o|u/g, "")
    return char;
} 
function removeconsonant(char)
{
    char=char.replace(/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z/g,"")
    return char;
}


// function for create encrypt text from name

function encryption_name(string_input)
{
    let string;
    if(string_input.length>3)
    {
        string=removelvowels(string_input)   
        if(string.length < 3)
        {
            let substring;
            substring=removeconsonant(string_input);
            for(let index=0;index<=3-(string.length);index++)
            {
                string+=substring[index];
            }
            
        }
        else if(string.length> 3)
        {
            string=string[0]+string[2]+string[3];
        }
        else
        {
            string=string;
        }
    }
    else
    {
        string=removelvowels(string_input)
        let sub=removeconsonant(string_input)
        string=string+sub;
        for(let index=0;index<=3-(string.length);index++)
        {
            string+='x';
        }
    }
    string = string.toUpperCase()
    return string;
}
function year()
{
    let date=input.dob.split("/");
    let year=date[2];
    let month=date[1]
    month=(64+(+month))
    month=String.fromCharCode(month)
    return year[2]+year[3]+month
}
output=output.join("");
console.log("masteCode(");
console.log(input);
console.log(") ->"+output);