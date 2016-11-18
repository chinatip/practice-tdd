import _ from 'lodash'
const fib = [0, 1, 1]
export const getFibo = (n) => { 
	if(!fib[n]) {
		fib[n] = getFibo(n-1) + getFibo(n-2)
	}
	return fib[n]
}
