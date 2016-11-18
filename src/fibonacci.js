import _ from 'lodash'

export const getFibo = (n) => { 
	if(n == 1 || n == 2) return 1
	if(n == 0) return 0
	return getFibo(n-1) + getFibo(n-2)
}