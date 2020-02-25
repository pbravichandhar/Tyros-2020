/**
*<h6>This program explains varius OOPS concpets such as polymorphism, constructor, Abstraction, inheritance etc.</h6>
*
*@author Akaash
*@version 1.0
*@since 25.02.2020 
*/
abstract class personal{    
	abstract void login();    //Abstraction is used to hide the unnessary login details 
}                                   

class Account extends personal{
	int id,age;
	String name;

	Account(String name,int id,int age){   //Parameterized Constructor is used
		this.name = name;
		this.age = age;
		this.id = id;
		System.out.println("User Details:");
		System.out.println("Id:"+id);
		System.out.println("Name:"+name);
		System.out.println("Age:"+age);
	}
	
	void login(){                                          //Simple Definition for the login method from abstract Class
		System.out.println("The user has logged in...!");
	}

	void show(String branch){
		System.out.println("The branch is "+branch);
	}
                                                                  //Polymorphism is used here to display the branch name and account number
	void show(int accountNo){
		System.out.println("The Account Number is "+accountNo);
	}
}

public class Main{
	public static void main(String[] args){
		Account a = new Account("Akaash",1001,20); //Object created for the child class inherited from the base class personal
		a.show("Tharamani");                       //Method call to show the branch name 
		a.show(123456);                            //Method call to show the Account number
		a.login();                                 //Calling the abstract method from the child object
	}
}


