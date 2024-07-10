import { string } from 'superstruct';
import { emailWeak, fend } from '../../../src';

export const Struct = fend(string(), emailWeak);

export const data = 'foobar';

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'email',
		path: [],
		branch: [data],
	},
];
