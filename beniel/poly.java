import java.io.*;
public class poly
{
	void show()
	{
        System.out.println("derived class function ");	
    }
    void show(int a,int b)
    {
    	System.out.println("the value are"+a+b);
    }
    void show(int x)
    {
    	System.out.println("the value is "+x);
    }
    void show(char s)
    {
    	System.out.println("the char is "+s);
    }
    public static void main(String[] args) 
    {
    	poly p=new poly();
    	p.show();
    	p.show(10,20);
    	p.show(8);
    	p.show('B');
    }
}