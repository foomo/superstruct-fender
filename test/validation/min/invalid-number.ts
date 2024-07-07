import { number } from 'superstruct';
import { fend, min } from '../../../src';

export const Struct = fend(number(), min(5));

export const data = 1;

export const failures = [
	{
		value: 1,
		type: 'number',
		refinement: 'min',
		path: [],
		branch: [data],
	},
];
