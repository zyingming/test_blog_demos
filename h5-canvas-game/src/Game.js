// 游戏类，负责初始化画布，背景
import {DataStore} from './js/base/DataStore';
import {Director} from './js/base/Director';
import {Target} from './js/player/Target';
import {Ball} from './js/player/Ball';
// import {StartButton} from './js/player/StartButton';

export default class Game {
	constructor() {
		this.canvas = document.getElementById('stage');
		this.ctx = this.canvas.getContext('2d');

		this.dataStore = DataStore.getInstance();
		this.dataStore.canvas = this.canvas;
		this.dataStore.ctx = this.ctx;
		
        this.director = Director.getInstance();
		
		this.resourceLoad();
		this.registerEvent();
	}
	resourceLoad() {
		this.director.isGameOver = true;

		this.dataStore.put('target', Target).put('needle', []).put('ball', []);
		// 画针
		this.director.creatNeedle();
		// 画小球
		this.director.creatBall();
		// 画靶子
		this.dataStore.get('target').draw();
	}
	init() {
		this.director.isGameOver = false;
		this.director.run();
	}
	registerEvent() {
		this.canvas.addEventListener('mousedown', e => {
			// 游戏结束之后进行初始化，开启游戏
			if(this.director.isGameOver) {
				this.init();
			}else {
				this.director.bindBallEvent();
			}
		})
	}

}