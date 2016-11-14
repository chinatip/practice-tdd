import { isPrime } from './prime'
import assert from 'power-assert'

describe ('Prime', () => {
	it('should be prime if input is prime', () => {
		assert(isPrime(2) === true)
	})

	it('should be false if input is not prime', () => {
		assert(isPrime(1) === false)
	})
})