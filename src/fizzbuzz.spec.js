import { checkFizzBuzz } from './fizzbuzz'
import assert from 'power-assert'

describe ('FizzBuzz', () => {
	it('should be Fizz if divided by 3', () => {
		assert(checkFizzBuzz(3) === "Fizz")
		assert(checkFizzBuzz(6) === "Fizz")
	})

	it('should be Buzz if divided by 5', () => {
		assert(checkFizzBuzz(5) === "Buzz")
		assert(checkFizzBuzz(10) === "Buzz")
	})

	it('should be FizzBuzz if divided by 15', () => {
		assert(checkFizzBuzz(15) === "FizzBuzz")
		assert(checkFizzBuzz(30) === "FizzBuzz")
	})

	it('should be n if not divided by 3 or 5', () => {
		assert(checkFizzBuzz(13) === 13)
		assert(checkFizzBuzz(22) === 22)
	})

})