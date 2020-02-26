import java.util.*;
 public class multiplication{
   public static void main(String args[]){
    try{
     Scanner s =new Scanner(System.in);
     System.out.println("enter the value:");
     int i=s.nextInt();
     System.out.println("enter the range:");
     int n=s.nextInt();
     for(int j=1;j<=n;j++){
     	System.out.println(i+ "*" + j +"=" +i*j);
     } 
     } 
     catch(NullPointerException ex){
     	System.out.println("error");
     }
     finally{
     System.out.println("executed successfully.....");
     }
     
        
   }	
}