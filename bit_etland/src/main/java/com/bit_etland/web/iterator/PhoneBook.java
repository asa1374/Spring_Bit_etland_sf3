package com.bit_etland.web.iterator;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import com.bit_etland.web.domain.CustomerDTO;

public class PhoneBook {
	public static void main(String[] args) {
		HashMap<String, Object> map = null;
		
		Set set = map.entrySet();
		Iterator it =set.iterator();
		while(it.hasNext()) {
			Map.Entry e = (Map.Entry)it.next();
			String id = (String) e.getKey();
			CustomerDTO cus = (CustomerDTO) e.getValue();
			//System.out.print(cus.getCustomerName() + " : " +cus.getPhone() +"\n");
		}
	}
}
