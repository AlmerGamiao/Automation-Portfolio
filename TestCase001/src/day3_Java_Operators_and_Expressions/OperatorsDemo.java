package day3_Java_Operators_and_Expressions;

public class OperatorsDemo {

	public static void main(String args[]) {
		
		int a=10,b=20;
		
		System.out.println("Sum of A and B: "+(a+b));
		System.out.println("Multiply of A and B: "+(a*b));
		System.out.println("Minus of A and B: "+(a-b));
		System.out.println("Divide of A and B: "+(a/b));
		System.out.println("division of A and B: "+(a%b));
		
		int result =  a+b;
		System.out.println("Sum of A and B: "+result);
		
		// Relational/comparison operators
		System.out.println(a>b); //greater than
		System.out.println(a<b); //less than
		System.out.println(a>=b);//greater than equal
		System.out.println(a<=b);//greater than equal
		
		b=10;
		System.out.println(a>b); //greater than
		System.out.println(a<b); //less than
		System.out.println(a>=b);//greater than equal
		System.out.println(a<=b);//greater than equal
		
		System.out.println(a!=b);//not equal
		System.out.println(a==b);//equal to
		
		boolean res=a>b;
		System.out.println(res);
		
//		3 Logical Operators && || !
		
		boolean x=true;
		boolean y=false;
		
		
		
		System.out.println(x && y);
		System.out.println(x || y);
		System.out.println(!x);
		System.out.println(!y);
		
		boolean b1=10>20; //valid
		System.out.println(b1);
		
		boolean b2=20>10; //valid
		System.out.println(b2);
		
		
		System.out.println(b1 && b2);
		System.out.println(b1 || b2);
		
		System.out.println((10<20)&&(20>10));
	}
}
