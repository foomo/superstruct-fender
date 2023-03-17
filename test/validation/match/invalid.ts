import { fend, match } from '../../../src'
import { string } from 'superstruct'

const m = match('foo', /^[0-9]+$/)

export const Struct = fend(string(), m)

export const data = '12a3'

export const failures = [
	{
		value: '12a3',
		type: 'string',
		refinement: 'foo',
		path: [],
		branch: [data],
	},
]
