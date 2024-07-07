import { string } from 'superstruct';
import { equal, fend } from '../../../src';

export const Struct = fend(string(), equal('bar'));

export const data = 'foo';

export const failures = [
	{
		value: 'foo',
		type: 'string',
		refinement: 'equal',
		path: [],
		branch: [data],
	},
];
