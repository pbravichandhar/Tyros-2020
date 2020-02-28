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
		System.out.println("Character "+c);
	}
}
public class encap extends base
{
	public static void main(String[] args) {
		encap e=new encap();
        e.get(10,'j');
        System.out.println(e.putn());
        e.putc();
	}
}
	
