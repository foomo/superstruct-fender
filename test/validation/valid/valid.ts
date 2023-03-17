import { valid } from '../../../src'

enum Values {
	Foo = 'foo',
	Bar = 'bar',
}

export const Struct = valid(Values)

export const data = 'bar'

export const output = 'bar'
