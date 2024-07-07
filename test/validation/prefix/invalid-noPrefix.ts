import { string } from 'superstruct';
import { fend, noPrefix } from '../../../src';

export const Struct = fend(string(), noPrefix('foo'));

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
