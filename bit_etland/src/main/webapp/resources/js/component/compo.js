var $$ = $$ || {};

$$ = {
		div : x=>{
			 return $('<div id='+x.id+'/>');
		},
		a : x=>{
			return $('<a href="'+x.url+'" id='+x.id+'/>');
		},
		li : x=>{
			return $('<li id='+x.id+'/>');
		},
		h : x=>{
			return $('<h'+x.s+'/>');
		},
		form : x=>{
			return $('<form id='+x.id+'/>');
		},
		label : x =>{
			return $('<label for='+x.name+'/>');
		},
		input : x =>{
			return $('<input type='+x.type+' id='+x.id+' />');
		},
		br : x=>{
			return $('<br/>');
		}
};

function common(){
	_common.dugi_nav();
}

var _common = {
		dugi_nav :()=>{
			$('#nav').children().eq(0).html($$.a({url:'#',id:'su'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({url:'#',id:'ma'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({url:'#',id:'ar'}).text('배열'));
			$('#nav').children().eq(3).html($$.a({url:'#',id:'coll'}).text('자료구조'));
			$('#nav').append($$.li({id:''})).children().eq(4).html($$.a({url:'#',id:'ap'}).text('응용'));
		}
};









