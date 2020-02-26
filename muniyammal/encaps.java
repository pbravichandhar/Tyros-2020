import java.io.*;
class base
{
	private int a;
	private char c;
	public void get(int x,char y)
	{
		a=x;
		c=y;
	}
	public int putn()
	{
		return a;
	}
	public void putc()
	{
		System.out.println("string"+c);
	}
}
	public class encaps extends base
	{
		public static void main(String[] args)
		{
			encaps e=new encaps();
			e.get(20,'v');
			System.out.println(e.putn());
			e.putc();
		}
	}
