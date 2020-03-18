function berth_type(s) 
{ 
     if (s > 0 && s < 73) 
        if (s % 8 == 1 ||  
            s % 8 == 4) 
            console.log (" is a lower berth\n",+s); 
              
        else if (s % 8 == 2 ||  
                s % 8 == 5) 
            console.log ( " is a middle berth\n",+s); 
              
        else if(s % 8 == 3 ||  
                s % 8 == 6) 
            console.log  (" is a upper berth\n",+s); 
              
        else if(s % 8 == 7) 
            console.log (" is a side lower berth\n",+s); 
              
        else
            console.log  (" is a side upper berth\n",+s); 
              
    else
        console.log (" invalid seat number\n",+s); 
} 
console.log(berth_type(6));