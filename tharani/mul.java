import java.util.*;

public class Main
{

	public static void main(String[] args) {

	    try{

		int n,i,j;

 
   		Scanner sc=new Scanner(System.in);

   		
System.out.println("Enter the first input:");
  

   		
n=sc.nextInt();
   	
	
	System.out.println("Enter the second input:");

  
  
 		i=sc.nextInt();


		j=1;

		do {
    
	              		System.out.println(n+"*"+j+"="+n*j);
		
                j++;

	               }while(j<=i); 

	    }

	    catch(NullPointerException ex)

	    {

	        System.out.println("exception has been caught");

	    }

	    finally

	    {

	        System.out.println("Finally block executed");

	    }

	}

}
