import { string } from 'superstruct';
import { fend, min } from '../../../src';

export const Struct = fend(string(), min(5));

export const data = 'foo';

export const failures = [
	{
		value: 'foo',
		type: 'string',
		refinement: 'min',
		path: [],
		branch: [data],
	},
];
