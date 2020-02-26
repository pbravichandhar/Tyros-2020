import java.io.*;
class sample1
{
	int a,b;
	void get(int n,int m)
	{
		a=n;
		b=m;
	}
	void disply()
	{
		System.out.println("a="+a+"b="+b);
	}
	public static void main(String args[])
	{
		sample1 s=new sample1();
		s.get(10,20);
		s.disply();
	}
}
