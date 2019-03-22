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

	@Override
	public String geometric(Map<?, ?> param) {
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff");
		int A = Integer.parseInt(start);
		int R = Integer.parseInt(end);
		int S = A;
		int N = Integer.parseInt(diff);

		while (true) {

			A = A * R;
			S += A;
			N++;
			System.out.println("Count is " + (N - 1) + ", Number is " + A + ", Sum is " + S);
			if (N > 10) {
				break;
			}

		}
		System.out.println("S is " + S);
		return String.valueOf(S);
	}

	@Override
	public String factorial(Map<?, ?> param) {
		String start = (String) param.get("start"),
				end = (String) param.get("end");
		int S = Integer.parseInt(start);
        int F = Integer.parseInt(end);
        int N = 0;
        for (N = 2; N < 11; N++) {
            F = F * N;
            S += F;
            System.out.println("Count is " + (N)
                    + ", Number is " + F
                    + ", Sum is " + S);
        }
		return String.valueOf(S);
	}

	@Override
	public String Fibonacci(Map<?, ?> param) {
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff");
		int A = Integer.parseInt(start);
        int B = Integer.parseInt(end);
        int S = A+B;
        int N = Integer.parseInt(diff);
        int C = 0;
    
        while(true){
            
            C = A + B;
            S += C;
            A = B;
            B = C;
            N++;
            System.out.println(
                    "Count is "+(N)+", Number is "+ C +", Sum is "+ S);
            if(N==20){
                break;
            }
            
        }
        System.out.println("S is "+ S);     
		return String.valueOf(S);
	}

}
