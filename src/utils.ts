export function getSize(
	value: number | string | any[] | Map<any, any> | Set<any>,
): number {
	if (typeof value === 'number') {
		return value;
	} else if (value instanceof Map || value instanceof Set) {
		return value.size;
	} else {
		return value.length;
	}
}

export function print(value: any): string {
	if (typeof value === 'symbol') {
		return value.toString();
	}

	return typeof value === 'string' ? JSON.stringify(value) : `${value}`;
}
