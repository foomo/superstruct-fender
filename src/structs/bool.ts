import { refine, Struct } from 'superstruct'

export const NameBool = 'bool'

export const bool =
	<T extends boolean, S>(expected: boolean) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameBool, (value) => value === expected)
