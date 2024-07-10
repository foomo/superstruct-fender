import { string } from 'superstruct';
import { fend, suffix } from '../../../src';

export const Struct = fend(string(), suffix('baz'));

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
