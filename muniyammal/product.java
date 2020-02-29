import java.io.*;
import java.util.*;
public class product
{
	void show(int x,int y)
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
		int m,n,A=0;
		while(A!=1)
		{
			try
		{
			Scanner sc=new Scanner(System.in);
			product e=new product();
			System.out.print("enter the number table");
			m=sc.nextInt();
			System.out.print("enter the limit of the table");
			n=sc.nextInt();
			e.show(m,n);
			A=1;
		}
		catch(InputMismatchException e){
			System.out.println("try valid input");
		}
	}
}
}