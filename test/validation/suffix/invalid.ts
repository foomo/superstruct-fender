import {string} from 'superstruct'
import {suffix} from "../../../src/structs/string";

export const Struct = suffix(string(), "baz")

export const data = "foobar"

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'suffix',
		path: [],
		branch: [data],
	},
]
