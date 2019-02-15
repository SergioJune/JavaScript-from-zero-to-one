// 这里存放的是处理浏览器兼容的js

// 根据 id 获取 元素
function $my(id){
	return document.getElementById(id);
}

// 处理获取文本内容的兼容问题
function getTextContent(element){  // 参数为获取文本内容的元素
	if (typeof element.innerText === 'string'){  // 说明存在该属性
		return element.innerText;
	}else{
		return element.textContent;
	}
}


// pageX 和 pageY 有浏览器兼容问题
// document.body.scrollLeft 屏幕的滑动距离
function getScroll(){ // 屏幕滚动的距离
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	return {
		'scrollLeft': scrollLeft,
		'scrollTop': scrollTop
	}
}

function getPage(e){
	var pageX = e.clientX + getScroll().scrollLeft;
	var pageY = e.clientY + getScroll().scrollTop;
	return {
		'pageX': pageX,
		'pageY': pageY
	}
}

// 将动画抽取出一个函数
function move(element, step, end){
	// 保证页面只能有一个定时器
	if(element.timeId){
		clearInterval(element.timeId);
		element.timeId = null;
	}
	element.timeId = setInterval(function(){

	var x = element.offsetLeft + step;
	// 判断是否到终点
	// if (end - x < Math.abs(step)) {
	// 	// 停止闹钟
	// 	clearInterval(timeId);
	// 	element.style.left = end + 'px';
	// 	return;
	// }
	// 现在需要考虑往后倒退
	if (x > end)  // 当前位置大于终点，需要倒退
		step = -Math.abs(step);

	if (Math.abs(end - x) <= Math.abs(step)) {
			// 	停止闹钟
			clearInterval(element.timeId);
			element.style.left = end + 'px';
			return;
		}

	element.style.left = x + 'px';
	}, 10);

	
}