package com.lti.finance.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.lti.finance.beans.Registration;
import com.lti.finance.services.RegistrationServiceImpl;




@CrossOrigin("*")
@RestController
@RequestMapping("user")
public class RegistrationController {

	@Autowired
	RegistrationServiceImpl registrationService;

	// http://localhost:8091/user/registration
	
	@PostMapping("/registration")
	public long addUser(@RequestBody Registration registration) {
		return registrationService.addUser(registration);
	}

}
