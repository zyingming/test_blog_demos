import {DataStore} from '@/js/base/DataStore';
export class StartButton {
	constructor() {
		this.dataStore = DataStore.getInstance();
		console.log(this.dataStore,'button');
	}
	static getInstance() {
        if (!StartButton.instance) {
            StartButton.instance = new StartButton();
        }
        return StartButton.instance;
    }
	draw() {

	}
}