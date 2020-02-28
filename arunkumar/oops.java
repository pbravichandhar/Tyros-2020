/**
*<h6> This program compressed all oops concepts in single code </h6> 
*
*@author Arunkumar
*@version 1.0
*@since 25-02-2020 
*/
import java.io.*;
abstract class abstr                    // abstract class
{
	abstract void run();
	void gone()
	{
        
		System.out.println("going to inheritance");
	}
	void move()                  //method override
	{
		System.out.println("Moving in abstract");
	}
}
public class oops extends abstr          //inheritance
{
	int n,t1;
	String name,t2;
	private int id;
	private String user;
	
	oops()               //default constructor
	{
        
        n=12;
        String name="mugesh"; 
		System.out.println(n+" "+name);
    }
    oops(int i,String name)   //parameterized constructor
    {
       n=i;
       this.name=name;
    }
    oops(oops c)   //copy constructor
    {
       n=c.n;
       name=c.name;
    }
    void show()
    {
    	System.out.println(n+" "+name);
    }
    void show(int l)             //polymorphism
    {
       System.out.println(l);
    }
    void show(String s)          //polymorphism      
    {
       System.out.println(s);   
    }
    void show(char o)            //polymorphism
    { 
       System.out.println(o);
    }
    void show(double d)          //polymorphism
    {
       System.out.println(d);    
    }
    public void putuser(String user)        //encapsulation
    {  
       this.user=user;
    }
    public void getuser()        //encapsulation
    { 
         System.out.println(user);
    }
    public void putid(int id)        //encapsulation
    { 
         this.id=id;
    }
    public void getid()        //encapsulation
    { 
      System.out.println(id);
    }
    void run()
    {
    	 System.out.println("running overload");
    }
    
    void move()              //method overriding 
    {
    	super.move();
    	System.out.println("Moving in class");
    }

   public static void main(String args[])
  {
  	  System.out.println("---------Constructor-------------");
  	  oops c1=new oops();
  	 
  	  oops c2=new oops(19,"karthik");
  	  c2.show();
  	  oops c3=new oops(c2);
  	  c3.show();
  	  System.out.println("---------Polymorphism(overloading)----------");
      oops p=new oops();
  	  p.show(21);
      p.show("raja"); 
      p.show('r');
      p.show(17.0);
      System.out.println("---------Encapsulation----------");
      p.putuser("vishnu");
      p.getuser();
      p.putid(50);
      p.getid();
      System.out.println("---------Abstract class and inheritance----------");
      p.run();
      p.gone();
       System.out.println("---------polymorphism(overriding)----------");
      p.move();

  }
}
  


  
  