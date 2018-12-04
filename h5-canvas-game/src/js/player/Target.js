// 靶子类
import {themeColor} from '@/config.js';
import {DataStore} from '@/js/base/DataStore';
import {Cilcle} from '@/js/base/Cilcle';

import {Needle} from '@/js/player/Needle';

export class Target extends Cilcle {
	constructor() {
		const radius = 50;
		// y基于圆点
		super(DataStore.getInstance().canvas.width / 2 - radius, 200, radius, themeColor);

		this.radius = 50;
		this.ctx = DataStore.getInstance().ctx;
		this.centerX = DataStore.getInstance().canvas.width / 2 - radius;
	}
	draw() {
		super.draw()

		this.ctx.font = '32px sans-serif';
		// y基于字体头部
		this.ctx.fillText('1', this.centerX, 210);
	}
	// 圆点的坐标
	pos() {
		return {x: this.centerX, y: 200};
	}
	// 圆上点的坐标
	getPointY(x) {
		// return Math.acos((x-this.centerX) / this.radius)
		return Math.sqrt(this.radius * this.radius - (x - this.centerX) * (x - this.centerX))
	}
}