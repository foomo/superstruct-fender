import { refine, Struct } from 'superstruct'

export const NameContains = 'contains'

export const contains =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, NameContains, (value) => value.includes(expected))

export const notContains =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, NameContains, (value) => !value.includes(expected))
