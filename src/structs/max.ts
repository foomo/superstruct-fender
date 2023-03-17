import { refine, Struct } from 'superstruct'
import { getSize } from '../utils'

export const NameMax = 'max'

export const max =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		expected: number
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameMax, (value: T) => getSize(value) <= expected)
