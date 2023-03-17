import { refine, Struct } from 'superstruct'

export const NamePrefix = 'prefix'

export const prefix =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, NamePrefix, (value) => value.startsWith(expected))

export const noPrefix =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, NamePrefix, (value) => !value.startsWith(expected))
