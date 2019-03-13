var app = app || {};
app.path = (()=>{
	var init = x=>{
		app.session.init(x);
		alert(app.$.ctx());
		onCreate();
	};
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView = ()=>{};
	return {init : init};
})();
app.session = (()=>{
	var init = x=>{
		onCreate(x);
	};
	var onCreate = x=>{
		sessionStorage.setItem("ctx",x);
	};
	var setContentView = ()=>{};
	return {init : init};
})();
//app.$.ctx
app.$ = { ctx : ()=>{return sessionStorage.getItem("ctx")} };
