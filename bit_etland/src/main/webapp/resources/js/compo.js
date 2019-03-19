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
			return $('<form/>');
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