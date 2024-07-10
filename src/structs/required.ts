import { type Struct, refine } from 'superstruct';
import { isFalsy } from 'utility-types';

export const NameRequired = 'required';

export const required = <
	T extends number | string | any[] | Map<any, any> | Set<any>,
	S,
>(
	struct: Struct<T, S>,
): Struct<T, S> => refine(struct, NameRequired, (value: T) => !isFalsy(value));

export const isRequired =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		expected: boolean,
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameRequired, (value: T) => !isFalsy(value) === expected);
