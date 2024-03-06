public class Model extends java.util.Observable {	
	
	private int counter;	//primitive, automatically initialised to 0

	public Model(){
		System.out.println("Model()");
	} 

	public void setValue(int value) {

		this.counter = value;
		System.out.println("Model init: counter = " + counter);
		setChanged();
		//model Push - send counter as part of the message
		notifyObservers(counter);
		//if using Model Pull, then can use notifyObservers()
		//notifyObservers()

	} //setValue()
	
	public void incrementValue() {

		++counter;
		System.out.println("Model     : counter = " + counter);
		setChanged();
		//model Push - send counter as part of the message
		notifyObservers(counter);
		//if using Model Pull, then can use notifyObservers()
		//notifyObservers()

	} //incrementValue()
	
} //Model
