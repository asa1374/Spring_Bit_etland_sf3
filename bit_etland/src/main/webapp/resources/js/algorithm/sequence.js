function sequence(arr,str){
		//$('#right_start').remove();
		$.each(arr,(i,j)=>{
			let GID = Math.floor(Math.random()*10000)+1;
			let _GID = '#'+GID;
			$('<div id="'+GID+'">'+str+'</div>').appendTo('#right_start');
			let POST = GID+'_POST';
			let _POST = '#'+POST;
			$(_GID+' h4').attr('id',POST);
			
			let TITLE = GID+'_TITLE';
			let _TITLE = '#'+TITLE;
			$(_GID+' h2').attr('id',TITLE);
			
			let DATE = GID+'_DATE';
			let _DATE = '#'+DATE;
			$(_TITLE).siblings('h5').eq(0).attr('id',DATE);
			
			let BTN = GID+'_BTN';
			let _BTN = '#'+BTN;
			$(_TITLE).siblings('h5').eq(1).attr('id',BTN);
			
			let INPUT = GID+'_INPUT';
			let _INPUT = '#'+INPUT;
			$(_GID+' p').attr('id',INPUT);
			
			$(_TITLE).text(j.val);
			$(_BTN).empty();
			$(_INPUT).empty();
			let x = [];
			switch(arr,(j.id)){
			case 'ari' :
				x = [
					{ cls:'start', txt :'시작값'},
					{ cls:'end', txt :'한계값'},
					{ cls:'diff', txt :'공차'}];
				break;
			case 'geo' :
				x = [
					{ cls:'start', txt :'시작값'},
					{ cls:'end', txt :'한계값'},
					{ cls:'diff', txt :'공비'}];
				break;
			case 'fac' :
				x = [
					{ cls:'start', txt :'시작값'},
					{ cls:'end', txt :'마지막'},
					{ cls:'diff', txt :'없다'}];
				break;
			case 'fibo' :
				x = [
					{ cls:'start', txt :'시작값'},
					{ cls:'end', txt :'한계값'},
					{ cls:'diff', txt :'모름'}];
				break;
			};
			$(_sequence.dugi_input(x)).appendTo(_INPUT);
			$('#del_start').remove();
			$('#del_end').remove();
			$('<span class="label label-danger" style="font-size: 20px"></span>')
			.text('결과')
			.addClass('cursor')
			.attr('name',j.id)
			.appendTo(_BTN).click(function(){
				let that = $(this).attr('name');
				let data = {
						start : $(_INPUT+' .start').val(),
						end : $(_INPUT+' .end').val(),
						diff : $(_INPUT+' .diff').val()};
				$.ajax({
					url : $.ctx()+'/algo/seq/'+that,
					type : 'post',
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
						$(_INPUT).empty();
						$('<h2>결과값 : ' +d.result+'</h2>').appendTo(_INPUT);
					},
					error : e=>{
						alert('결과 값 받아오기 실패');
					}
				});
			});
	
			$('<span class="label label-primary" style="margin-left: 20px; font-size: 20px"></span>').text('리셋').addClass('cursor')
			.appendTo(_BTN)
			.click(()=>{
				$(_INPUT).empty();
				$(_sequence.dugi_input(x)).appendTo(_INPUT);
			});
		});
		//nav 수열을 눌렀을떄
		/*$('#su').addClass('cursor').click(()=>{
			alert('수열을 누름');
			$('.form-group').empty();
			_sequence.dugi_su();
		});*/
		//nav 수학을 눌렀을떄
		/*$('#ma').addClass('cursor').click(()=>{
			alert('수학을 누름');
			let str = $($('#right_start').children().eq(0)).html();
			$($('#right_start').children()).remove();
			let arr = [
				{ id:'max', val :'최대값과 최솟값'},
				{ id:'sum', val :'합계와 평균'},
				{ id:'deci', val :'소수 판별'},
				{ id:'prime', val :'소인수 분해'}];
			
			$('<div id="'+111+'">'+str+'</div>').appendTo('#right_start');
			
		});*/
		
}
var _sequence = {
		dugi_input : (x)=>{
			let html = '<form>';
			$.each(x,(i,j)=>{
				html += '<div class="form-group">';
				html += '<label for=""">'+j.txt+' :</label>';
				html += '<input type="text" class="'+j.cls+'"></input>';
			});
			html += '</form>';
			return html;
		},
		dugi_input_ma : (x)=>{
			let html = '<form>';
			$.each(x,(i,j)=>{
				html += '<div class="form-group">';
				html += '<label for=""">'+j.txt+' :</label>';
				html += '<input type="text" class="'+j.cls+'"></input>';
			});
			html += '</form>';
			return html;
		},
		dugi_remove: () =>{
			$('#rm_start').before('<div id="del_start">');
			$('#rm_end').after('<div id="del_end">');
			$('#del_start').nextUntil('#del_end').remove();
			$('#right_end').remove();
		}
}