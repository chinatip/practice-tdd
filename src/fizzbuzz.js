export const checkFizzBuzz = (n) => { 
	var a = ""
	if (n % 3 == 0) {
		a += "Fizz"
	}

	if (n % 5 == 0 ) {
		a += "Buzz"
	}

	if(a === "") return n
	else return a
}