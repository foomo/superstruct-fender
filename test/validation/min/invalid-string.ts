import { min, fend } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), min(5))

export const data = 'foo'

export const failures = [
	{
		value: 'foo',
		type: 'string',
		refinement: 'min',
		path: [],
		branch: [data],
	},
]
