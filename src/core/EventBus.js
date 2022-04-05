export default class EventBus {
	constructor() {
		this.listeners = {};
	}

	__checkError(event, callback) {
		if (!event) {
			throw new Error('The event doesn\'t defined.');
		}

		if (!this.listeners?.[event]) {
			throw new Error(`${event} doesn't exist.`);
		}

		if (callback && !this.listeners[event].includes(callback)) {
			throw new Error(`${event} doesn't have this callback. ${callback}`);
		}
	}

	on(event, callback) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event, callback) {
		this.__checkError(event, callback);
	}

	emit(event, ...args) {
		this.__checkError(event);
		this.listeners[event].forEach(listener => {
			listener(...args);
		});
	}
}