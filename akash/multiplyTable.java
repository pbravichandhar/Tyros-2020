/**
*This program gives us the multiples of a given number with how many times
*it should multipy with the given number
*
*@author Akaash
*@version 1.0
*@since 25-02-2020
*/
import java.util.*;

public class multiplyTable{
	public static void table(int whichNumber,int times){
		for (int i=1;i<=times;i++){
			System.out.println(whichNumber+"*"+i+"="+whichNumber * i);
		}
	}


	public static void main(String[] args){
		int whichNumber,times;
		while(true){   //Retrying logic inside the while loop if the input given by 
			try{       //the user is wrong....!
				Scanner s = new Scanner(System.in);
				System.out.println("Enter which number's multiplication table to display:");
				whichNumber = s.nextInt();
				System.out.println("How many times:");
				times = s.nextInt();
				table(whichNumber,times);
				s.close();
				break;
			}
			catch(InputMismatchException e){  //For handling the Exception thrown in the try block
				System.out.println("please enter a valid Input..!");
			}
		}
	}
}