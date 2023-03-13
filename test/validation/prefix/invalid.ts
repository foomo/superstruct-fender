import {string} from 'superstruct'
import {prefix} from "../../../src/structs/string";

export const Struct = prefix(string(), "faa")

export const data = "foobar"

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'prefix',
		path: [],
		branch: [data],
	},
]
