import { bool, fend } from '../../../src'
import { boolean } from 'superstruct'

export const Struct = fend(boolean(), bool(true))

export const data = false

export const failures = [
	{
		value: false,
		type: 'boolean',
		refinement: 'bool',
		path: [],
		branch: [data],
	},
]
