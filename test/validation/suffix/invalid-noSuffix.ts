import { string } from 'superstruct';
import { fend, noSuffix } from '../../../src';

export const Struct = fend(string(), noSuffix('bar'));

export const data = 'foobar';

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'suffix',
		path: [],
		branch: [data],
	},
];
