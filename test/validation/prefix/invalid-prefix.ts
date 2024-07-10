import { string } from 'superstruct';
import { fend, prefix } from '../../../src';

export const Struct = fend(string(), prefix('faa'));

export const data = 'foobar';

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'prefix',
		path: [],
		branch: [data],
	},
];
