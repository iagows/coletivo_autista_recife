// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type Constructor<T = unknown> = new (...args: any[]) => T;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class DependencyInjection {
	private static container: Map<Constructor, unknown> = new Map();

	static register<T>(token: Constructor<T>, instance: T): void {
		DependencyInjection.container.set(token, instance);
	}

	static get<T>(token: Constructor<T>): T {
		const instance = DependencyInjection.container.get(token);
		if (!instance) {
			throw new Error(`No instance registered for token: ${token.name}`);
		}
		return instance as T;
	}
}

// Implementando o decorator Inject
export const Inject = <T>(token: Constructor<T>) => {
	return (target: unknown, key: string) => {
		Object.defineProperty(target, key, {
			get: () => DependencyInjection.get(token),
			enumerable: true,
			configurable: true,
		});
	};
};
