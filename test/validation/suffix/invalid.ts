import { string } from 'superstruct'
import { suffix } from '../../../src'

export const Struct = suffix(string(), 'baz')

export const data = 'foobar'

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'suffix',
		path: [],
		branch: [data],
	},
]
