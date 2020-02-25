import java.io.*;
abstract class personal{    
	abstract void login();    //Abstraction is used to hide the unnessary login details 
}                                   

class Account extends personal{
	int num,rate;
	String product;

	Account(String product,int num,int rate){   //Parameterized Constructor is used
		this.product = product;
		this.rate = rate;
		this.num = num;
		System.out.println("User Details:");
		System.out.println("NUM:"+num);
		System.out.println("PRODUCT:"+product);
		System.out.println("RATE:"+rate);
	}
	
	void login(){                                          //Simple Definition for the login method from abstract Class
		System.out.println("The user has logged in...!");
	}

	void show(String shop){
		System.out.println("The shop is "+shop);
	}
                                                                  //Polymorphism is used here to display the branch name and account number
	void show(int address){
		System.out.println("The address is "+address);
	}
}

public class Example{
	public static void main(String[] args){
        shop s= new shop("bakya",1041,10); //Object created for the child class inherited from the base class personal
		s.show("Thiruvanmiur");                       //Method call to show the branch name 
		s.show(1422143);                            //Method call to show the Account number
		s.login();                                 //Calling the abstract method from the child object
	}
}


