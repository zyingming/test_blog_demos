export class DataStore {
	static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }
	constructor() {
		this.map = new Map();
	}
	get(key) {
		return this.map.get(key)
	}
	put(key, value) {
		if(typeof value === 'function') {
			value = new value();
		}
		this.map.set(key, value);
		// 链式调用
		return this;
	}
	destory() {
		for(let value in this.map.values()) {
			value = null;
		}
		this.map.clear();
	}

}