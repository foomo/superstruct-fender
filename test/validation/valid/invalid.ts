import { valid } from '../../../src';

enum Values {
	Foo = 'foo',
	Bar = 'bar',
}

export const Struct = valid(Values);

export const data = 'baz';

export const failures = [
	{
		value: 'baz',
		type: 'valid',
		refinement: 'valid',
		path: [],
		branch: [data],
	},
];
