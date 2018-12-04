// 针类
import {DataStore} from '@/js/base/DataStore';
import {themeColor, color} from '@/config.js';

export class Needle {
	constructor(startAngle,color = themeColor, text) {
		this.dataStore = DataStore.getInstance();
		this.canvas = this.dataStore.canvas;
		this.ctx = this.dataStore.ctx;
		
		// 每帧移动的角度
		this.step = 0;
		this.radius = 10;
		this.needleWidth = 60;
		this.startAngle = startAngle;
		this.color = color;

		if(typeof text !== 'undefined') {
			this.text = text;
		}
	}
	/**
	 * [draw description]
	 * @param  {Number} startX [中心圆点横坐标]
	 * @param  {Number} startY [中心圆点纵坐标]
	 */
	draw(startX = 0, startY = 0) {

		++this.step;

		this.endX = startX + this.needleWidth * Math.cos((this.startAngle * 60 + this.step) * Math.PI / 180) * 2;
		this.endY = startY + this.needleWidth * Math.sin((this.startAngle * 60 + this.step) * Math.PI / 180) * 2;

		this.ctx.beginPath();
		this.ctx.moveTo(startX,startY);
		this.ctx.lineTo(this.endX, this.endY);
		this.ctx.moveTo(this.endX, this.endY);
		this.ctx.strokeStyle = this.color;
		this.ctx.closePath();
		this.ctx.stroke();
		// 绘制圆
		this.ctx.arc(this.endX,this.endY,this.radius,0,Math.PI*2,true); 
		this.ctx.fillStyle = this.color;
		this.ctx.fill();

		if(typeof this.text !== 'undefined') {
			// 绘制文字
			this.ctx.fillStyle = 'white';
			this.ctx.textAlign = 'center';
			this.ctx.textBaseLine = 'bottom';
			this.ctx.font = '16px sans-serif';
			this.ctx.fillText(this.text, this.endX, this.endY + this.radius / 2);
		}
	}
	pos() {
		return {
			x: this.endX, 
			y: this.endY
		}
	}
	
	
}