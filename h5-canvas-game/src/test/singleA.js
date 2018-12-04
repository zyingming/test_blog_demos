export class SingleA {
	constructor(id) {
		this.id = id;
	}
	static getInstance() {
        if (!SingleA.instance) {
            SingleA.instance = new SingleA(1);
            return SingleA.instance;
        }else {
	        return SingleA.instance;
        	
        }
    }
	draw() {

	}
}