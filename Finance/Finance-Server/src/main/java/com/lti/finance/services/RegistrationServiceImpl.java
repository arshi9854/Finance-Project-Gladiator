package com.lti.finance.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.finance.beans.Registration;
import com.lti.finance.dao.RegistrationDao;


@Service("registrationService")
public class RegistrationServiceImpl implements RegistrationService{

	@Autowired
	RegistrationDao dao;
	
	
	public RegistrationDao getDao() {
		return dao;
	}


	public void setDao(RegistrationDao dao) {
		this.dao = dao;
	}


	
	
	public long addUser(Registration e) {
		
		System.out.println("inside Service add");
		return dao.addUser(e);
		
		
		
		
	}




}