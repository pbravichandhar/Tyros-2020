/**
*This program explains varius OOPS concpets such as polymorphism, constructor, Abstraction, inheritance etc.
*
*@author Akaash
*@version 1.0
*@since 25.02.2020 
*/

/*
	Abstraction hides the unnecessary data in the design level from the user
*/
//Abstraction is used to hide the unnessary login details
abstract class personal{    
	abstract void login();     
}                                   

//extends a abstract class to achieve abstraction
class Account extends personal{
	int id,age;
	String name;
	private String lastName;

	/*
		Constructor is like a normal method inside a class, when we create an instance for the class,
		the constructor method will be called first and executed 

		Types of Constructor:
		>default constructor
		>parameterized constructor
		>copy constructor	
	*/

	//Parameterized Constructor is used
	/**
	 * 
	 * @param name
	 * @param id
	 * @param age
	 * @return
	 */
	Account(String name,int id,int age){   
		this.name = name;
		this.age = age;
		this.id = id;
		System.out.println("User Details:");
		System.out.println("Id:"+id);
		System.out.println("Name:"+name);
		System.out.println("Age:"+age);
	}


	/* 
		Encapsulation is also hiding data from the user at the implementation level
		getters and setters are used for the data binding in Encapsulation
	*/
	public void setLastname(String last_name) {
		lastName = last_name;
	}
	/**
	 * 
	 * @return
	 */
	public String getLastName(){
		return lastName;
	}
	
	//Simple Definition for the login method from abstract Class
	void login(){                                         
		System.out.println("The user has logged in...!");
	}
	/*
		polymorphism = poly (many) + morphism (forms)
		Single name for a method, but has various forms and differs with their parameters

		Two types of polymorphism:
		>compile time polymorphism
		>Run time polymorphism
	*/

	//Polymorphism is used here to display the branch name and account number
	void show(String branch){
		System.out.println("The branch is "+branch);
	}
                                                                  
	void show(int accountNo){
		System.out.println("The Account Number is "+accountNo);
	}
}

/* 
	Inheritance is used to create relationship between two classes and used for code reusability
	>Single Inheritance
	>multilevel inheritance
	>hierarchical inheritance
	>Multiple inheritance and hybrid are not supported
*/

//Multilevel Inheritance
class Animal{  
	void eat(){
		System.out.println("eating...");
	}  
}  
class Dog extends Animal{  
	void bark(){
		System.out.println("barking...");
	}  
}  
class BabyDog extends Dog{  
	static void weep(){
		System.out.println("weeping...");
	}  
}

public class Main{

	String user;
	class InnerClass {
		int id;

		void getId(){

		}
		void setId(){

		}
	}
	class SecondInnerClass {
		int number;
	}
	public static void main(String[] args){

		
		//Object created for the child class inherited from the base class personal
		Account a = new Account("Akaash",1001,20);  
		
		//Method call to show the branch name  
		a.show("Tharamani");

		//Method call to show the Account number
		a.show(123456);
		
		//Calling the abstract method from the child object
		a.login();
		
		//get the data whenever needed (Encapsulation)
		a.setLastname("Kannan");
		System.out.println(a.getLastName());

		//Multilevel inheritance object created
		BabyDog babydog = new BabyDog();
		babydog.bark();
		babydog.eat();
		BabyDog.weep();
	}
}

  
 


