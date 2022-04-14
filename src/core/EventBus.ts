export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

export default class EventBus<
    E extends string = string,
    M extends { [K in E]: unknown[] } = Record<E, any[]>,
> {
    private listeners: { [key in E]?: Listener<M[E]>[] } = {};

    constructor() {
        this.listeners = {};
    }

    __checkCallbackError(event: E, callback: Listener<M[E]>) {
        this.__checkError(event);
        if (callback && !this.listeners[event]!.includes(callback)) {
            throw new Error(`${event} doesn't have this callback. ${callback}`);
        }
    }

    __checkError(event: E) {
        if (!event) {
            throw new Error('The event doesn\'t defined.');
        }

        if (!this.listeners?.[event]) {
            throw new Error(`${event} doesn't exist.`);
        }
    }

    on(event: E, callback: Listener<M[E]>) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event]!.push(callback);
    }

    off(event: E, callback: Listener<M[E]>) {
        this.__checkCallbackError(event, callback);
    }

    emit(event: E, ...args: M[E]) {
        this.__checkError(event);
        this.listeners[event]!.forEach((listener) => {
            listener(...args);
        });
    }
}
