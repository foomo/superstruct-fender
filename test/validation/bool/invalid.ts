import { boolean } from 'superstruct';
import { bool, fend } from '../../../src';

export const Struct = fend(boolean(), bool(true));

export const data = false;

export const failures = [
	{
		value: false,
		type: 'boolean',
		refinement: 'bool',
		path: [],
		branch: [data],
	},
];
