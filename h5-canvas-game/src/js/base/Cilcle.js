import {DataStore} from '@/js/base/DataStore';

export class Cilcle {
	constructor(startX = 0, startY = 0, radius = 0, color) {

		this.ctx = DataStore.getInstance().ctx;

		this.radius = radius;
		this.startX = startX;
		this.startY = startY;
		this.color = color; 
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.startX, this.startY, this.radius, 0, 2*Math.PI, false);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();

		this.ctx.fillStyle = 'white';
		this.ctx.textAlign = 'center';
		this.ctx.textBaseLine = 'bottom';
	}
}