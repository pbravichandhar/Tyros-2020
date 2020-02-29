@author: Beniel
@version: 1.8
@since: 25-02-2020


import java.io.*;
import java.util.*;
public class matrix {
	
	void show(int x,int y)                   // function for matrix table 
	{
		int p,i;
		for(i=1;i<=y;i++)
		{
			p=x*i;
			System.out.println(x+"*"+i+"="+p);
		}

	}
	public static void main(String[] args) 
	{
		int m,n,flag=0;
		while (flag!=1) {                   //  while denote run until user give valid input
		try
		{
		Scanner sc=new Scanner(System.in);
		matrix e=new matrix();
		System.out.print("enter the number table :  ");
		m=sc.nextInt();
		System.out.print("\n");
		System.out.print("enter the limit of the table :  ");
		n=sc.nextInt();
		System.out.print("\n");
		e.show(m,n);
		flag=1;                              // once user give valid input then while ended
	    }
	     catch(InputMismatchException e)        // catch for InputMismatchExcption 
            {  
                   System.out.println("Try valid input......");  
            }  
        }

    }  
	
}