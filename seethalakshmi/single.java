class A {
  public void display() {
    System.out.println("Initialise class A");
  }
}
class B extends A { //B is a subclass of A
  //Override
  @Override
  public void display() {
    System.out.println("Initialise class B");
  }
  public int mul(int x, int y) {
    return x*y;
  }
  //Overload
  public double add(double x,double y) {
    return x+y;
  }
}
//encapsulation
class C{
private String place;
public int getPlace(){
return place;
}
public void setPlace(String newPlace) {
place = newPlace;
}
}
//abstraction
abstract class D {
public abstract void run();
}
class E extends D {
public void run(){
System.out.println("\nProcess completed..");
}
}
class Test {
  public static void main(String[] args) {
    A a=new A();
    a.display(); //Displays 
    B b=new B();
    b.display(); //Displays 
    System.out.println(b.mul(5,2)); 
    System.out.println(b.add(5.,2.)); //polymorphism
    a.display(); 
    C cm = new C();
    cm.setPlace("Kerala");
    System.out.print("Place : " + cm.getPlace() );
    D fp = new E();
    fp.run();
   }
}
