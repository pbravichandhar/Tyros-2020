import java.io.*;
import java.util.*;
public class mult
{
	public static void main(String[] args)
	{
		int i,p,m,n;
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the number table");
		m=sc.nextInt();
		System.out.println("enter the limit of the table");
		n=sc.nextInt();
		for(i=1;i<=n;i++)
		{
			p=m*i;
			System.out.println(m+"*"+i+"="+p);
		}
	}
}