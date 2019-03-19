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
			$('#nav').children().eq(2).html($$.a({url:'#',id:'ar'}).text('배열'));
			$('#nav').children().eq(3).html($$.a({url:'#',id:'coll'}).text('자료구조'));
			$('#nav').append($$.li({id:''})).children().eq(4).html($$.a({url:'#',id:'ap'}).text('응용'));
			$('#ex1').text('수열 1 - 등차 수열의 합계');
			$('#ex2').text('수열 2 - 등비 수열의 합계');
			$('#res_1')+inputform();
			$('#res_btn_1').text('결과').addClass('cursor').click(()=>{
				$.ajax({
					url : $.ctx()+'/algo/seq/1',
					type : 'post',
					data : JSON.stringify({
						start : $('#start').val(),
						end : $('#end').val(),
						diff : $('#diff').val()
					}),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
						alert('넘어온 값'+d.result);
						$('#res_1').html($$.h({s:'2'}).text('결과값 :'+d.result));
					},
					error : e=>{
						alert('숫자 똑바로 입력해 김태혁이');
					}
				});
			});
			$('#reset_btn_1').text('리셋').addClass('cursor').click(()=>{
				$('#res_1')+inputform();
			});
			ex2();
		})
	};
	let ex2 = ()=>{
		$('#res_2')+inputform();
		$('#di').children().eq(1).html($$.label({name:'div'}).text('등비'));
		
	};
	let inputform = ()=>{
		return '.html($$.form()'+
				'.append($$.div({id:'+'st'+'})'+
				'.append($$.input({type:'+'text',+'id:'+'start'+'}))'+
				'.append($$.label({name:'+'start'+'}).text('+'시작값'+'))).append($$.br())'+
				'.append($$.div({id:'+'en'+'})'+
				'.append($$.input({type:'+'text'+',id:'+'end'+'}))'+
				'.append($$.label({name:'+'end'+'}).text('+'마지막'+'))).append($$.br())'+
				'.append($$.div({id:'+'di'+'})'+
				'.append($$.input({type:'+'text','id:'+'diff'+'}))'+
				'.append($$.label({name:'+'diff'+'}).text('+'공차'+'))))'
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
