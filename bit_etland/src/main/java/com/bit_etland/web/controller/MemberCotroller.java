package com.bit_etland.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bit_etland.web.domain.CustomerDTO;

@Controller
@RequestMapping("/customer")
public class MemberCotroller {
	static final Logger logger = LoggerFactory.getLogger(MemberCotroller.class);
	@RequestMapping(value="/signin",method= RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO customer) {
		
		System.out.println(customer.getCustomerID());
		return "public:category/list.tiles";
	}
}