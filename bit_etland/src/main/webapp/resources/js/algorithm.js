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
			dugi_nav();
			dugi_rm_ex2();
			dugi_exam('등차');
			dugi_input_ex1_itter();
			var str = $('#newdiv1').html();
			$('#newdiv1').remove();
			let arr = [
				{ id:'1', val :'등차'},
				{ id:'2', val :'등비'},
				{ id:'3', val :'팩토리얼'},
				{ id:'4', val :'피보나치'}
				];
			$.each(arr,(i,j)=>{
				$('#dugi_start1').append(str);
				$('#ex1').attr('id','ex_'+j.id);
				$('#ex_'+j.id).text(j.val);
				
			});
		})
	};
	let dugi_nav =()=>{
		$('#nav').children().eq(0).html($$.a({url:'#',id:'su'}).text('수열'));
		$('#nav').children().eq(1).html($$.a({url:'#',id:'ma'}).text('수학'));
		$('#nav').children().eq(2).html($$.a({url:'#',id:'ar'}).text('배열'));
		$('#nav').children().eq(3).html($$.a({url:'#',id:'coll'}).text('자료구조'));
		$('#nav').append($$.li({id:''})).children().eq(4).html($$.a({url:'#',id:'ap'}).text('응용'));
	};
	
	let aa =()=>{
		$('#dugi_cont').prepend(()=>{
			dugi_exam();
			dugi_rm_ex2();
		});
	};
	let dugi_input = x=>{
		$('#ex1').text(x);
		$('#res_1').html($$.form()
		.append($$.div({id:'st'})
		.append($$.input({type:'text', id:'start'}))
		.append($$.label({name:'start'}).text('시작값'))).append($$.br())
		.append($$.div({id:'en'})
		.append($$.input({type:'text' ,id:'end'}))
		.append($$.label({name:'end'}).text('마지막'))).append($$.br())
		.append($$.div({id:'di'})
		.append($$.input({type:'text', id:'diff'}))
		.append($$.label({name:'diff'}).text('공차'))));
	};
	
	let dugi_input1 = x=>{
		$('#ex1').text(x);
		$('#right_top').prepend($$.form()
		.append($$.div({id:'st'})
		.append($$.input({type:'text', id:'start'}))
		.append($$.label({name:'start'}).text('시작값'))).append($$.br())
		.append($$.div({id:'en'})
		.append($$.input({type:'text' ,id:'end'}))
		.append($$.label({name:'end'}).text('마지막'))).append($$.br())
		.append($$.div({id:'di'})
		.append($$.input({type:'text', id:'diff'}))
		.append($$.label({name:'diff'}).text('공차'))));
	};
	let dugi_rm_ex1 = () =>{
		$('#ex1').before('<div id="rm_start1">');
		$('#dugi_end1').after('<div id="rm_end1">');
		$('#rm_start1').nextUntil('#rm_end1').remove();
	};
	
	let dugi_input_ex1_itter = ()=>{
		$('#ex1').before('<div id="rm_start1">');
		$('#dugi_end1').after('<div id="rm_end1">');
		$('#rm_start1').nextUntil('#rm_end1').wrapAll('<div id="newdiv1"></div>');
	};
	let dugi_rm_ex2 = () =>{
		$('#dugi_start2').before('<div id="rm_start2">');
		$('#dugi_end2').after('<div id="rm_end2">');
		$('#rm_start2').nextUntil('#rm_end2').remove();
	};
	let dugi_reset = ()=>{
		$('#reset_btn_1').text('리셋').addClass('cursor').click(()=>{
			$('#res_1').html($$.form()
					.append($$.div({id:'st'})
					.append($$.input({type:'text', id:'start'}))
					.append($$.label({name:'start'}).text('시작값'))).append($$.br())
					.append($$.div({id:'en'})
					.append($$.input({type:'text', id:'end'}))
					.append($$.label({name:'end'}).text('마지막'))).append($$.br())
					.append($$.div({id:'di'})
					.append($$.input({type:'text', id:'diff'}))
					.append($$.label({name:'diff'}).text('공차'))));
		});
	};
	let dugi_exam = x=>{ 
			dugi_input(x);
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
						$(this).html($$.h({s:'2'}).text('결과값 :'+d.result));
					},
					error : e=>{
						alert('숫자 똑바로 입력해 김태혁이');
					}
				});
			});
			dugi_reset();
	};
	let dugi_exam1 = x=>{ 
		dugi_input1(x);
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
		dugi_reset();
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
