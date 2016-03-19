import java.util.Date;

public class Primes {

	public static void main(String args[]) {
		new Primes().calculatePrimes();
	}

	public void calculatePrimes() {
		long start = new Date().getTime();
		int number = 0;
		int numberOfPrimes = 0;
		while(true) {
		    if(isPrime(++number)) numberOfPrimes++;
		    if(numberOfPrimes == 1000000) break;
		}
		long end = new Date().getTime();
		System.out.println(number);
		System.out.println("primes: " + (end - start) + "ms");
	}

	public boolean isPrime (int number) {
	    if(number < 2) return false;
	    for (int i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
	        if (number % i == 0) return false;
	    }
	    return true;
	};
}