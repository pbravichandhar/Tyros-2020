import java.io.*;
abstract  class demo
{
	abstract void run();      //abstract function declaration
	void fun()
	{
		System.out.println("abstract class normal function");
	}
}
public class abstr extends demo
{
	void run()  
	{
		System.out.println("abstract function ");
	}
	public static void main(String[] args) 
	{
		abstr a=new abstr();
		a.run();
		a.fun();
	}
}