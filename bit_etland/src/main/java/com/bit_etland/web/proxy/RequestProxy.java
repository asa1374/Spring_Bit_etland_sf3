package com.bit_etland.web.proxy;

import javax.servlet.http.HttpServletRequest;

public class RequestProxy implements Proxy{
	private HttpServletRequest request;
	public HttpServletRequest getRequest() {
		return request;
	}
	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}
	@Override
	public void carryOut(Object o) {
		System.out.println("====3.requst 진입====");
		if((HttpServletRequest) o != null) {
			setRequest((HttpServletRequest) o);
		}else {
			System.out.println("o가 널");
		}
	}
}
