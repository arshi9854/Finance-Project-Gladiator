package com.lti.finance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.finance.beans.AdminLoginForm;
import com.lti.finance.beans.LoginForm;
import com.lti.finance.services.LoginService;


@CrossOrigin("*")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@GetMapping("/hello")
	public String hello() {
		System.out.println("hello World Again");
		return "Hello World";
	}
	
	@PostMapping("/login")
	public long ValidateUser(@RequestBody LoginForm loginForm) {
		System.out.println(loginForm.getCustomerUsername());
		System.out.println(loginForm.getCustomerPassword());
		return loginService.ValidateUser(loginForm.getCustomerUsername(), loginForm.getCustomerPassword());
	}
	
	@PostMapping("/adminlogin")
	public long ValidateAdmin(@RequestBody AdminLoginForm adminLoginForm) {
		System.out.println(adminLoginForm.getAdminUsername());
		System.out.println(adminLoginForm.getAdminPassword());
		return loginService.ValidateAdmin(adminLoginForm.getAdminUsername(), adminLoginForm.getAdminPassword());
	}

}
