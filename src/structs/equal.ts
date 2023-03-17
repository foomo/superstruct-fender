import { refine, Struct } from 'superstruct'

export const NameEqual = 'equal'

export const equal =
	<T, S>(expected: T) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameEqual, (value) => value === expected)
