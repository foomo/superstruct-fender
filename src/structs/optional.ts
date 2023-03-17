import { Struct } from 'superstruct'
import { isFalsy } from 'utility-types'

export const optional = <T, S>(struct: Struct<T, S>): Struct<T, S> =>
	new Struct({
		...struct,
		validator: (value, ctx) => isFalsy(value) || struct.validator(value, ctx),
		refiner: (value, ctx) => isFalsy(value) || struct.refiner(value, ctx),
	})
