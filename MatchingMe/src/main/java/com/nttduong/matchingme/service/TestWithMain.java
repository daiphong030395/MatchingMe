package com.nttduong.matchingme.service;

//import org.springframework.beans.factory.annotation.Autowired;

//import com.nttduong.matchingme.model.Province;

public class TestWithMain {
//	@Autowired
//	private UserService userService;
	
	public static void main(String[] args) {
//		Province p = new Province();
//		UserServiceImpl us = new UserServiceImpl();
//		p = us.findProvinceById(01);
//		System.out.println(p.getName());
		UserServiceImpl test = new UserServiceImpl();
		test.findById(1);
		 
	}
}
