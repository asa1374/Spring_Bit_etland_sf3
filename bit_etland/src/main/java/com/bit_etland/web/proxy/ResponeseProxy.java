package com.bit_etland.web.proxy;

import javax.servlet.http.HttpServletResponse;

public class ResponeseProxy implements Proxy{
	private HttpServletResponse response;
	public HttpServletResponse getResponse() {
		return response;
	}
	public void setResponse(HttpServletResponse response) {
		this.response = response;
	}
	@Override
	public void carryOut(Object o) {
		System.out.println("====4.respon 진입====");
		setResponse((HttpServletResponse) o);
	}
	
}
