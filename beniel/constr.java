import java.io.*;
public class constr
{
	int a,b;
	constr()
	{
		a=10;
		b=20;
	}
	constr(int x,int y)
	{
		a=x;
		b=y;
	}
	constr(constr c)
	{
		a=c.a;
		b=c.b;
	}
	void display()
	{   System.out.println("the values");
		System.out.print(a+""+b);
	}
	public static void main(String args[])
	{
		constr c1=new constr();
		constr c2=new constr(30,20);
		constr c3=new constr(c2);
		c1.display();
		c2.display();
		c3.display();
	}
	
}
