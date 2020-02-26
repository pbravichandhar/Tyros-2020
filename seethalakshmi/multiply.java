/**
*<h1>multiplication table</h1>
*The multiplication program  displays the multiplication
*table of certain number upto a given range to the
*standard ouptput.
*@author seetha
*@version 1.0
*/ 
import java.util.*;
 public class multiplication{
   public static void main(String args[]){
    try{
     Scanner s =new Scanner(System.in);
     System.out.println("enter the value:");
     int i=s.nextInt();                        //reads the value of i
     System.out.println("enter the range:");
     int n=s.nextInt();                       //reads the required range
     while(i<=n){                                 //condition checking
     	System.out.println(i+ "*" + j +"=" +i*j); //performs multiplication and prints 
        i++;                                   //increments the value of i by 1
     } 
   }
     catch(NullPointerException ex){
     	System.out.println("error");      //if any exception arasies this block executes 
     }
     finally{
     System.out.println("executed successfully.....");  //this block executes even if there is any error in the program
     }
 }	
}