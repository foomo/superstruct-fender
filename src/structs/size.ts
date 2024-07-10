import { type Struct, refine } from 'superstruct';
import { getSize } from '../utils';

export const NameSize = 'size';

export const size =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		expected: number,
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameSize, (value: T) => getSize(value) === expected);

export const notSize =
	<T extends number | string | any[] | Map<any, any> | Set<any>, S>(
		expected: number,
	) =>
	(struct: Struct<T, S>): Struct<T, S> =>
		refine(struct, NameSize, (value: T) => getSize(value) !== expected);
