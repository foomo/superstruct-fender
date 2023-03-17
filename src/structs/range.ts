import { refine, Struct } from 'superstruct'
import { getSize } from '../utils'

export const NameRange = 'range'

export const range =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		min: number,
		max: number
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameRange, (value: T) => {
			const size = getSize(value)
			return size >= min && size <= max
		})
