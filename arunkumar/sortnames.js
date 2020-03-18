 
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("count :?",function(count){
    functionname(count-1);
});
var names=[];

function functionname(count) {
    r1.question(" names are :", function(name) {
       
        if(name == "" || !isNaN(parseInt(name)))  
        {   
          console.log("input is not valid:");
          functionname(count);
        }
        
        else{
          names.push(name);
          functionname(count-1);  
          if(count==0)
          {
            string_sort(names);
            console.log(names);
            r1.close();
          }
        }
    });
}      

  function string_sort(str) { 
    var i = 0, j; 
    while (i < str.length) { 
        j = i + 1; 
        while (j < str.length) { 
            if (str[j] < str[i]) { 
                var temp = str[i]; 
                str[i] = str[j]; 
                str[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 
} 
      
