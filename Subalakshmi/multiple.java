/**
*Mulitiplication table program 
*
*@author Subalakshmi
*@version 1.0
*@since 26-02-2020 
*/
import java.io.*;
import java.util.*;
public class multis
{
	     
	    static void show(int m,int l)        // method denote inputs as arguments
        {
          int p;
          if(l>0 && m>0)
          {	
	        for(int i=1;i<=l;i++)           // multiplication limitations
	        {
             p=m*i;
	         System.out.println(m+"*"+i+"="+p);
	        }
	      }
	      
	     } 
        public static void main(String[] args)
         {
          while(true)
           {	
             try
           {
           
          
            int m,l,p;
	        System.out.println("The number");
	        Scanner in=new Scanner(System.in);
            m=in.nextInt(); 
            System.out.println("The limitation number");
            l=in.nextInt();
            show(m,l);
            break;
	      
	       }

	     catch(InputMismatchException e)
	     {
	     	System.out.println("\n enter valid inputs");
	     }
	   }
	   }  

}	    
	  

	 
	
	