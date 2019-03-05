package com.bit_etland.web.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	@RequestMapping(value="/",method = RequestMethod.GET)
	public String home(Model m) {
		System.out.println("입장");
		
		m.addAttribute("serverTime", new SimpleDateFormat("yyyy년MM월dd일").format(new Date()));
		return "home";
	}
}
