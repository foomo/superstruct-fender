import { type Struct, refine } from 'superstruct';

export const NameMatch = 'match';

export const match =
	(alias = NameMatch, expected: RegExp) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, alias, (value) => expected.test(value));

export const notMatch =
	(alias = NameMatch, expected: RegExp) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, alias, (value) => !expected.test(value));
