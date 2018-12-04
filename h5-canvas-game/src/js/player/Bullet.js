import {Needle} from './Needle';

export class Bullet extends Needle {
	costructor() {
		super(0)
	}
	draw(startX = 0, startY = 0, endY, angle = 0, color) {
		this.endY = 

		super.draw(startX = 0, startY = 0, angle = 0, color);
		
		this.ctx.fillStyle = 'white';
		this.ctx.textAlign = 'center';
		this.ctx.textBaseLine = 'bottom';
		this.ctx.font = '16px sans-serif';
		// y基于字体头部
		this.ctx.fillText('1', this.centerX, 210);

	}
}