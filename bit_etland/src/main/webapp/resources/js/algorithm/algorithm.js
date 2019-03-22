var algo = algo || {};
algo = (()=>{
	let init = x =>{
		algo.$.init(x);
	};
	let onCreate = ()=>{
		setContentView();
	};
	let setContentView = ()=>{
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/algorithm/sequence.js'),
				$.getScript($.js()+'/algorithm/math.js')
		).done(()=>{
			common();
			let arr = [{ id:'ari', val :'등차'},
						{ id:'geo', val :'등비'},
						{ id:'fac', val :'팩토리얼'},
						{ id:'fibo', val :'피보나치'}];
			$('#rm_start').before('<div id="del_start">');
			$('#rm_end').after('<div id="del_end">');
			$('#del_start').nextUntil('#del_end').remove();
			$('#right_end').remove();
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>')
			$('#right_start').nextUntil('#right_end')
				.wrapAll('<div id="new_div"></div>');
			let str = $('#new_div').html();
			$('#new_div').remove();
			sequence(arr,str);
			
			$('#su').addClass('cursor').click(()=>{
				alert('수열을 누름');
				let str = $($('#right_start').children().eq(0)).html();
				$('#right_start').children().remove();
				sequence(arr,str);
				$('#right_start').find('div').children('form').remove();
			});
			let ma = [
				{ id:'ari', val :'최대값과 최솟값'},
				{ id:'geo', val :'합계와 평균'},
				//{ id:'fac', val :'팩토리얼'},
				//{ id:'a', val :'소수 판별'},
				//{ id:'b', val :'소인수 분해'},
				//{ id:'c', val :'배수와 공배수'},
				//{ id:'fibo', val :'약수와 완전수'},
				//{ id:'1', val :'최대공약수와 최소공배수'},
				//{ id:'3', val :'근사값 '},
				//{ id:'2', val :'1의 보수와 2의 보수'},
				{ id:'4', val :'10진수와 2진수의 변환'},
				{ id:'5', val :'10진수와 16진수의 변환'},
				{ id:'6', val :'BCD 코드와 3초과 코드의 변환'},
				{ id:'7', val :'패리티 비트 검증'}];
			$('#ma').addClass('cursor').click(()=>{
				alert('수학을 누름');
				let str = $($('#right_start').children().eq(0)).html();
				$('#right_start').empty();
				$('#right_start').find('div').children('form').remove();
				math(ma,str);
				$('#right_start').find('div').children('form').remove();
			});
			let ar = [
				{ id:'ari', val :'행렬'},
				{ id:'geo', val :'직각 삼각형'},
				{ id:'fac', val :'ㄹ자로채우기'},
				{ id:'a', val :'다이아몬드'},
				{ id:'b', val :'모래시계'},
				{ id:'c', val :'오른쪽에 빈삼각형'},
				{ id:'fibo', val :'이등변 삼각형'}
				];
			$('#ar').addClass('cursor').click(()=>{
				alert('배열을 누름');
				let str = $($('#right_start').children().eq(0)).html();
				$($('#right_start').children()).remove();
				$('<div>'+str+'</div>').appendTo('#right_start');
				$('.form-group').remove();
				sequence(ar,str);
			});
		});
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
