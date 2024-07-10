import { string } from 'superstruct';
import { fend, min, required } from '../../../src';

export const Struct = fend(string(), required, min(5));

export const data = '';

export const failures = [
	{
		value: '',
		type: 'string',
		refinement: 'min',
		path: [],
		branch: [data],
	},
	{
		value: '',
		type: 'string',
		refinement: 'required',
		path: [],
		branch: [data],
	},
];
