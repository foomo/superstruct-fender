export const fend = <T>(s: T, ...rules: ((struct: T) => T)[]): T => {
	let x = s
	rules.reverse().every((value) => (x = value(x)))
	return x
}
