//使用在主js中调用这个函数即可
function mousePress() {
	let click_count = 0;
	let html = document.getElementsByTagName("html")[0];
	let body = document.getElementsByTagName("body")[0];
	//设置html点击事件
	html.onclick = function(e) {
		let span = document.createElement("span");
		let x = e.pageX;
		let y = e.pageY;
		//设置rbg变色 
		let r = Math.ceil(Math.random()*200);
		let g = Math.ceil(Math.random()*200);
		let b = Math.ceil(Math.random()*200);
		let rgb = "rgb("+r+","+g+","+b+")";
		span.style.color = "#116fe9";
		span.style.zIndex = "999";
		span.style.position = "absolute";
		//设置不可选中
		span.style.msUserSelect = "none";
		span.style.UserSelect = "none";
		// 使用pageX获取鼠标点击坐标 比.screenX 和.clientX|Y好用 因为会跟随滚动条滚动所以位置精确
		span.style.left = (x - 10) + "px";
		span.style.top = (y - 10) + "px";
		// 每点击一次后清除定时器
		clearInterval(pressResult);
		// 每点击对应数组的一种文字效果
		let pop = ['★', '☀', '☼', '♩', '♪', '♫', '♬', '§', '✪', '❤', '❁', '❃', '❀', '✿', '❉', '❈', '✲', '*', '☠', '☣', '☢',
			'☮', '〄', '➹', '☩', 'ஐ', '☎', '✈', '〠', '۩', '♜', '♨', '☄', '☂', '☃'
		];
		span.innerText = "❃"; //默认
		// 取余循环遍历数组
		click_count = (click_count + 1) % pop.length;
		span.innerText = pop[click_count]
		//通过random函数随机生成一个数来显示一个字体大小 这样有动画效果
		span.style.fontSize = Math.random() * 10 + 15 + "px";
		var timekeeping = 0; //时间计数器在setInterval种
		// 通过动画显示时间秒速然后把添加的元素删除
		var pressResult;
		// 使用setTimeout定时器 不设置时间就是立刻执行 在setTimeout里面执行
		setTimeout(function() {
			pressResult = setInterval(function() {
				span.style.color = rgb;
				if (++timekeeping == 100) {
					//使用定时器不断执行 当时间到1秒时(100*10 )清除定时器，并且移除span节点也就是我们点击时的效果节点
					clearInterval(pressResult);
					span.remove()  
				}
				span.style.top = y - 20 - timekeeping + "px";
				span.style.opacity = (120 - timekeeping) / 120;
				
			}, 10);
		}, 10);
		body.appendChild(span);
	};
};
