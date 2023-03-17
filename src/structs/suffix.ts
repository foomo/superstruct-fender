import { refine, Struct } from 'superstruct'

export const suffix =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, 'suffix', (value) => value.endsWith(expected))

export const noSuffix =
	(expected: string) =>
	(struct: Struct<string, null>): Struct<string, null> =>
		refine(struct, 'suffix', (value) => !value.endsWith(expected))
