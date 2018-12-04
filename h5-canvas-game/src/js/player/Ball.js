import {Cilcle} from '@/js/base/Cilcle';

export class Ball extends Cilcle {
	constructor(startX, startY, color, id) {
		const radius = 10;
		super(startX - radius / 2, startY, radius, color);
		this.radius = 10;
		
		this.id = id;
	}
	draw(text = 0) {
		super.draw()
		
		this.ctx.font = '14px sans-serif';
		// y基于字体头部
		this.ctx.fillText(this.id?this.id:text, this.startX , this.startY + this.radius / 2);
	}
	pos() {
		return {x: this.startX, y: this.startY}
	}
}