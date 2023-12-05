interface Cache<T> {
    get(key: string): T | undefined;
    set(key: string, value: T): void;
}

export class SimpleCache<T> implements Cache<T> {
    private cache: Record<string, T> = {};

    get(key: string): T | undefined {
        return this.cache[key];
    }

    set(key: string, value: T): void {
        this.cache[key] = value;
    }

}