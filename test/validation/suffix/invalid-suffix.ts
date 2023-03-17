import { fend, suffix } from '../../../src'
import { string } from 'superstruct'

export const Struct = fend(string(), suffix('baz'))

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
