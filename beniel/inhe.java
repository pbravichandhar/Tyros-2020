import java.io.*;
class base
{
	void basefun()
	{
		System.out.println("base class function ");
	}

}
class derived extends base         // single level inheritance
{
	void derivedfun()
	{
		System.out.println("derived class function ");
	}
}
public class inhe extends derived     // multi level inheritance
{
    public static void main(String args[])
    {
    	inhe d=new inhe();
    	d.basefun();
    	d.derivedfun();
    }
}


