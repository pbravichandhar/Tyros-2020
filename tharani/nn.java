import java.util.*;

/**
*<h1>Multiplication table!</h1>
*This program implements an multiplication table that
*simply multiply two given integer number 
*simply displays the "multiplication table" to the standard output
*@author tharani
*@version 1.0
*@since 2020-02-26
*/
public class Main
{

    public static void main(String[] args) {

        try{

            int n,i,j;

 
           Scanner sc=new Scanner(System.in);

            
System.out.println("Enter the first input:");
  

            
n=sc.nextInt();
   	 //get the first input @param n form the user
            System.out.println("Enter the second input:");

  
  
        i=sc.nextInt();        //get the second input @param i from the user     
   
         j=1;

           do {
    
               System.out.println(n+"*"+j+"="+n*j);  //multiply two parameters and prints output in multiplication table format
	 j++;                                                     
//increments @param j value by 1
           }while(j<=i); 
                                      //execute the block of statements and repeats the block while condition is true
        }
        catch(NullPointerException ex)
                     // handle the  exception thrown by the try block
        {

            System.out.println("exception has been caught");

         }
        finally

       {  

           System.out.println("Finally block executed");
 // this block excute once even there is an error may or may not occur
        }

    }

}
