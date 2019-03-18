var app = app || {};
app = (()=>{
	var init = x=>{
		app.session.init(x);
		onCreate();
	};
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView = ()=>{
		//nav header blog content bottom
		$('#nav').empty().text('네비');
		$('#header').empty().text('헤더');
		$('#blog').empty().text('블로그');
		$('#content').empty().text('컨텐트');
		$('#bottom').empty().text('바텀');
		//html은 오버라이딩의 개념이다 보통 많이 사용하는 메소드이다.
		$('#nav').html('<h1>네비</h1>');
		$('#header').html('<h1>헤더</h1>');
		$('#blog').html('<h1>블로그</h1>');
		$('#content').html('<h1>컨텐트</h1>');
		$('#bottom').html('<h1>바텀</h1>');
	};
	return {init : init}
})();

app.session = (()=>{
	var init = x=>{
		onCreate(x);
	};
	var onCreate = x=>{
		sessionStorage.setItem('ctx',x);
	};
	var setContentView = ()=>{};
	return {init : init}
})();

app.$ = { ctx : ()=>{return sessionStorage.getItem('ctx')} };
