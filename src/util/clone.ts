export function clone<T>(count: number, value: T): T[] {
	return Array.from({ length: count }, () => value);
}
