abstract class animal{    
	abstract void animal_general_fuctions();    //Abstraction is used to hcollor_ide the unnessary animal_general_fuctions details 
}                                   

class dog extends animal{
	int collor_id,price;
	String type;

	dog(String type,int collor_id,int price){   //Parameterized Constructor is used
		this.type = type;
		this.price = price;
		this.collor_id = collor_id;
		System.out.println("Dog Details:");
		System.out.println("collor_id:"+collor_id);
		System.out.println("type:"+type);
		System.out.println("price:"+price);
	}
	
	void animal_general_fuctions(){                                          //Simple Definition for the animal_general_fuctions method from abstract Class
		System.out.println("Animal has 4 legs .....");
	}

	void poly(String type){
		System.out.println("The type is "+type);
	}
                                                                  //Polymorphism is used here to display the branch type and dog number
	void poly(int collor_id,int price){
		System.out.println("The dog price is "+price);
		System.out.println("The dog collor_id is "+collor_id);
	}
}

public class Example{
	public static void main(String[] args){
		dog a = new dog("pubby",512,20000); //Object created for the child class inherited from the base class animal
		System.out.println("one more dog details is there ......");
		a.poly("Labrado");                       //Method call to poly the branch type 
		a.poly(530,12000);                            //Method call to poly the dog number
		a.animal_general_fuctions();                                 //Calling the abstract method from the child object
	}
}


