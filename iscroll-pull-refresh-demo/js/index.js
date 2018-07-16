$(function() {

	var myScroll = null;
	var $loadDown = $('.load-down'), $loadUp = $('.load-up'); // loading
	var isPulled = false, loadUp = false, hasNoData = false; // 是否按下 是否在下拉  返回无数据
	var mockTime = 0;
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	var init = function() {
		myScroll = new IScroll('#scroller-wrapper', {
		    mouseWheel: true,  // 开启鼠标滑动
		    probeType: 2,
		});

		var upHeight = 0, bottomHeight = 0; // 下拉拖动的距离，上划拖动的距离
		$('.content').css('min-height', (document.documentElement.clientHeight || window.innerHeight)+1 + 'px')

		myScroll.on('scroll', function() {
			upHeight = this.y;
			bottomHeight = this.maxScrollY - this.y;
			// 下拉
			if(upHeight > 20) {
				$loadUp.css('display', 'block');
				isPulled = true;
				loadUp = true;
			}
			if(bottomHeight > 20) {
				loadUp = false;
				$loadDown.css('display', 'block')
			}
		})
		myScroll.on('scrollEnd', function() {
			// console.log(this.directionY)
			if (isPulled) { // 如果达到触发条件，则执行加载
	            isPulled = false;
	            if(loadUp) {
	                getUpData()
	            }else {
	                getDownData()
	            }
	        }
	        // 内容高度不足一屏时，上拉回弹到顶部
	        if(bottomHeight >= 40 && hasNoData) {
	            this.scrollTo(0, 0, 400);
	            return;
	        }
		})

	}
	var getUpData = function() {
		$.ajax({
	        url: 'http://test.com',   //请求访问json文件，拦截hello.json的请求，返回mock数据模板中的数据
	        type: 'get',
	        dataType: 'json',
	        success: function(data) {
	        	$('.content').html(render(data.user));
	        	$loadUp.css('display', 'none');
	        	myScroll.refresh();
	        	isPulled = true;
	        }
	    })
	}
	var getDownData = function() {
		if(mockTime > 2) {
			return;
		}
		$.ajax({
	        url: 'http://test.com',   //请求访问json文件，拦截hello.json的请求，返回mock数据模板中的数据
	        type: 'get',
	        dataType: 'json',
	        success: function(data) {
	        	$('.content').append(render(data.user));
	        	$loadDown.css('display', 'none');
	        	isPulled = true;
	        	++mockTime;
	        	myScroll.refresh();
	        }
	    })
	}
	var render = function(data) {
		return $.map(data, function(item, index) {
			return ['<div class="data-wrapper">'+ item.name +'</div>'].join('')
		})
	}
	init();
	getUpData();
})