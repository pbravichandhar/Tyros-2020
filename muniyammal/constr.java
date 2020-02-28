import java.io.*;
public class constr
{
	int x,y;
	constr()
{
	x=5;
	y=7;
}
constr(int a,int b)
{
	x=a;
	y=b;
}
constr(constr c)
{
	x=c.x;
	y=c.y;
}
void display()
{
System.out.println("the values");
System.out.print(x+""+y);
}
public static void main(String args[])
{
	constr c1=new constr();
	constr c2=new constr(10,20);
	constr c3=new constr(c2);
	c1.display();
	c2.display();
	c3.display();

}
}