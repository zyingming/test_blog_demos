// 导演类，控制游戏逻辑
import {DataStore} from '@/js/base/DataStore';
import {Needle} from '@/js/player/Needle';
import {Ball} from '@/js/player/Ball';

import {color} from '@/config';
export class Director {
	static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
	constructor() {
		this.dataStore = DataStore.getInstance();
		
	}
	
	creatNeedle() {
		this.centerPos = this.dataStore.get('target').pos();
		for(let i = 0; i < 6; i++) {
			const needle = new Needle(i);
			this.dataStore.get('needle').push(needle);
			needle.draw(this.centerPos.x, this.centerPos.y)
		}
	}
	creatBall() {
		for(let i = 0; i < 6; i++) {
			const random = Math.floor(Math.random() * color.length);
			const randomColor = color.splice(random,1)[0];
			const ball = new Ball(this.centerPos.x, this.centerPos.y + i * 30 + 300,randomColor,i);
			this.dataStore.get('ball').push(ball);
			ball.draw()
		}
	}
	bindBallEvent() {
		const ball = this.dataStore.get('ball').shift();
		// 生成一个新针
		this.dataStore.get('needle').push(new Needle(1.5,ball.color, ball.id));
	}
	getPointDistance(a, b) {
        return Math.floor(Math.sqrt(Math.floor(Math.pow(a.x - b.x, 2)) + Math.floor(Math.pow(a.y - b.y, 2))))
    }
	check() {
		const needles = this.dataStore.get('needle');
		const newNeedle = needles.slice(needles.length - 1)[0];

		for(let i = 0; i< needles.length - 1; i++) {
			if(this.getPointDistance(needles[i].pos(), newNeedle.pos()) <= 20){
				this.isGameOver = true;
			}
		}

	}
	run() {
		if(!this.isGameOver) {
			
			this.check();

			this.dataStore.ctx.clearRect(0,0,this.dataStore.canvas.width,this.dataStore.canvas.height);
			let timer = requestAnimationFrame(() => this.run())

			// let timer = setTimeout(() => this.run(),200);
			
			this.dataStore.get('needle').map(needle => {
				needle.draw(this.centerPos.x, this.centerPos.y);
			})
			this.dataStore.get('ball').map(ball => {
				ball.draw()
			})

			this.dataStore.get('target').draw();

			// this.dataStore.put('timer', timer);
		}else {
			cancelAnimationFrame(this.dataStore.get('timer'));
			this.dataStore.destory();
		}
	}
}