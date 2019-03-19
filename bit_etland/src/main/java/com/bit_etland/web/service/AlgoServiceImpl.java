package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class AlgoServiceImpl implements AlgoService{

	@Override
	public String arithmetic(Map<?, ?> param) {
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff");
		int A = Integer.parseInt(start);
		int E = Integer.parseInt(end);
		int D = Integer.parseInt(diff);
		int S = A;
		int N = 2;
		int AN =0;
		
		while(true) {
			AN = A + (N-1)*D;
			S = S + AN;
			N = N+1;			
			if(N>E)
				break;
		}
		return String.valueOf(S);
	}

}
