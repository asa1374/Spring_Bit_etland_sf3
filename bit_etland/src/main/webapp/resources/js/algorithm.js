var algo = algo || {};
algo = (()=>{
	let init = x =>{
		algo.$.init(x);
	};
	let onCreate = ()=>{
		
		setContentView();
	};
	let setContentView = ()=>{
		$.getScript($.js()+'/compo.js',()=>{
			//$('body').html($$.div({id:'test',clazz:'clazz'}))
			$('#nav').children().eq(0).html($$.a({url:'#',id:'su'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({url:'#',id:'ma'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({url:'#',id:'st'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({url:'#',id:'ar'}).text('배열'));
			$('#nav').append($$.li({id:''})).children().eq(4).html($$.a({url:'#',id:'ap'}).text('응용'));
			$('#ex1').text('수열 1 - 1+2+3+4+…+100까지의 합계 (do~while)');
			$('#ex2').text('수열 2 - 1-2+3-4+5-6+…+99-100의 합계 (do~while, while, if)');
		})
	};
	return {init:init,
		onCreate:onCreate};
})();

algo.$ = {
	init : (x)=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Session(x));
			algo.onCreate();
		})
	}
};
