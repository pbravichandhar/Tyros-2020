import java.io.*;
abstract class user{    
	abstract void signup();    //Abstraction is used to hide the unnessary login details 
}                                   

class details extends user{
	int id,age,dob;
	String name,address;

	details(String name,string address,int id,int age,int dob){   //Parameterized Constructor is used
		this.name = name;
		this.age = age;
		this.id = id;
		this.address = address;
		this.dob=dob;
		System.out.println("User Details:");
		System.out.println("Id:"+id);
		System.out.println("Name:"+name);
		System.out.println("Age:"+age);
		System.out.println("dob:"+dob);
		System.out.println("Address:"+address);
	}
	
	void signup(){                                          //Simple Definition for the login method from abstract Class
		System.out.println("The user has signup...!");
	}

	void display(String city){
		System.out.println("The branch is "+city);
	}
                                                                  //Polymorphism is used here to display the branch name and account number
	void display(int year){
		System.out.println("The Account Number is "+year);
	}
}

public class demo{
	public static void main(String[] args){
		user u  = new user("suba",101,21,25-05-1999,"thiruthangal"); //Object created for the child class inherited from the base class personal
	    u.display("thiruthangal");                       //Method call to show the branch name 
		a.display(2020);                            //Method call to show the Account number
		a.signup();                                 //Calling the abstract method from the child object
	}
}


