let master = {
    name : "Manokaran",
    surname :"kavi",
    gender :"F",
    dob : "12/03/1989"
}
   

function encrypt_name(string_master)
{
    let string;
    if(string_master.length>3)
    {
        string=vowels(string_master)   
        if(string.length < 3)
        {
            let substring;
            substring=consonant(string_master);
            for(let first=0;first<=3-(string.length);first++)
            {
                string+=substring[first];
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
        string=vowels(string_master)
        let sub=consonant(string_master)
        string=string+sub;
        for(let first=0;first<=3-(string.length);first++)
        {
            string+='x';
        }
    }
    string = string.toUpperCase()
    return string;
}
        function encrypt_surename(string_master)
{
    let string;
    if(string_master.length>3)
    {
        string=vowels(string_master)   
        if(string.length < 3)
        {
            let substring;
            substring=consonant(string_master);
            for(let first=0;first<=3-(string.length);first++)
            {
                string+=substring[first];
            }
            
        }
        else
        {
            string=string.substring(0,3);
        }
    }
    else
    {
        string=vowels(string_master);
        let sub=consonant(string_master)
        string=string+sub;
        for(let first=0;first<=3-(string.length);first++)
        {
            string+='x';
        }
    }
    string = string.toUpperCase()
    return string;
}

function vowels(char)
{
    char=char.replace(/a|e|i|o|u/g, "")
    return char;
} 
function consonant(char)
{
    char=char.replace(/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z/g,"")
    return char;
}
    function dateof()
{
    let date=master.dob.split("/");
      if(master.gender=='M'){
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
function year()
{
    let date=master.dob.split("/");
    let year=date[2];
    let month=date[1]
    month=(65+(+month))
    month=String.fromCharCode(month)
    return year[2]+year[3]+month
}

console.log(encrypt_surename(master.surname)+""+encrypt_name(master.name)+""+year()+""+dateof());
