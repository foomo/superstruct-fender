import {Struct, refine} from "superstruct";

export function prefix<T extends string, S extends any>(
	struct: Struct<T, S>,
	expected: string
): Struct<T, S> {
	return refine(struct, 'prefix', (value) => {
		return (
			value.startsWith(expected) ||
			`Expected a ${struct.type} prefix \`${expected}\` but received "${value}"`
		)
	})
}

export function noPrefix<T extends string, S extends any>(
	struct: Struct<T, S>,
	expected: string
): Struct<T, S> {
	return refine(struct, 'prefix', (value) => {
		return (
			!value.startsWith(expected) ||
			`Expected a ${struct.type} no prefix \`${expected}\` but received "${value}"`
		)
	})
}

export function suffix<T extends string, S extends any>(
	struct: Struct<T, S>,
	expected: string
): Struct<T, S> {
	return refine(struct, 'suffix', (value) => {
		return (
			value.endsWith(expected) ||
			`Expected a ${struct.type} suffix \`${expected}\` but received "${value}"`
		)
	})
}

export function noSuffix<T extends string, S extends any>(
	struct: Struct<T, S>,
	expected: string
): Struct<T, S> {
	return refine(struct, 'suffix', (value) => {
		return (
			!value.endsWith(expected) ||
			`Expected a ${struct.type} no suffix \`${expected}\` but received "${value}"`
		)
	})
}
