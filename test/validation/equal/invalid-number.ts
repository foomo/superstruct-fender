import { equal, fend } from '../../../src'
import { number } from 'superstruct'

export const Struct = fend(number(), equal(5))

export const data = 1

export const failures = [
	{
		value: 1,
		type: 'number',
		refinement: 'equal',
		path: [],
		branch: [data],
	},
]
