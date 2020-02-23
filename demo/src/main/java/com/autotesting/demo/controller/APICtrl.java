package com.autotesting.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.autotesting.demo.domain.Users;
import com.autotesting.demo.repo.UserRepo;

@RestController
//@Configuration
//@ComponentScan("repo")
public class APICtrl {

	@Autowired
	UserRepo userRepository;
	// UserRepo rp;

	@RequestMapping("/hello")
	public String hello() {
		System.out.println("Method Hello");
		return "sss";
	}

	@RequestMapping("/all")
	public @ResponseBody Iterable<Users> getAllUsers() {
		// This returns a JSON or XML with the users
		
		System.out.println("Method All");
		return userRepository.findAll();
	}

	// @RequestMapping("/findall")
	// @ResponseBody
	// public List<Users> findall(){
	// return rp.findAll();
	// }

}
