export const clone = <T>(count: number, value: (id: number) => T): T[] => {
	return Array.from({ length: count }, (_, i) => value(i));
};
