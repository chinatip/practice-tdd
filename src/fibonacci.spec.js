import { getFibo } from './fibonacci'
import assert from 'power-assert'

describe ('Fibonacci', () => {
	it('should get fibonacci', () => {
		assert(getFibo(19) === 4181)
		assert(getFibo(13) === 233)
	})
})