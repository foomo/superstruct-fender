import { noPrefix, fend } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), noPrefix('foo'))

export const data = 'foobar'

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'prefix',
		path: [],
		branch: [data],
	},
]
