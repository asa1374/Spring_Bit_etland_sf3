package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface AlgoService {
	public String arithmetic(Map<?,?>param);
	public String geometric(Map<?,?>param);
	public String factorial(Map<?,?>param);
	public String Fibonacci(Map<?,?>param);
}
