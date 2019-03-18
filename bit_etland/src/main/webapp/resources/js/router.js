"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js');
	sessionStorage.setItem('images',x+'/resources/images');
	sessionStorage.setItem('css',x+'/resources/css');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		images : ()=>{return sessionStorage.getItem('images');},
		css : ()=>{return sessionStorage.getItem('css');}
	}
}