import { refine, Struct } from 'superstruct'

export const NameValid = 'valid'

export const valid = <T>(
	expected: { [s: string]: T } | ArrayLike<T>
): Struct<T, null> =>
	refine(
		new Struct({
			type: NameValid,
			schema: null,
			validator: (value) => value !== undefined,
		}),
		NameValid,
		(value) => Object.values(expected)?.includes(value as any)
	)
