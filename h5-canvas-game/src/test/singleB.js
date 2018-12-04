import {SingleA} from './singleA';
export class SingleB {
	constructor() {
		this.SingleA = SingleA.getInstance(2);
		console.log(this.SingleA.size,this.SingleA.id,'button');
	}
	static getInstance() {
        if (!SingleB.instance) {
            SingleB.instance = new SingleB();
        }
        return SingleB.instance;
    }
	draw() {

	}
}