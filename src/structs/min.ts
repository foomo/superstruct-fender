import { type Struct, refine } from 'superstruct';
import { getSize } from '../utils';

export const NameMin = 'min';

export const min =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		expected: number,
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameMin, (value: T) => getSize(value) >= expected);
