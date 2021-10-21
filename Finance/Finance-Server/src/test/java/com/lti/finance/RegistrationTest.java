package com.lti.finance;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lti.finance.beans.Registration;
import com.lti.finance.dao.RegistrationDao;

@SpringBootTest
public class RegistrationTest {
	
	@Autowired
	RegistrationDao registrationDao;
	
	@Test
	public void testaddCust() {
		

		
		
				
		System.out.println(registrationDao);
		
		Registration reg = new Registration();
		
		reg.setCustomerName("Riya");
		reg.setCustomerPhone(7654568954L);
		reg.setCustomerEmail("riya100@gmail.com");
		reg.setCustomerUsername("prem");
		reg.setCustomerPassword("prem@123");
		reg.setCustomerAddress("pune");
		reg.setCardType("Gold");
		reg.setCustomerBank("IDBI");
		reg.setCustomerAccountNo(23456);
		reg.setCustomerIfsc("IDBI1234");
		reg.setActivation("False");
		
		long userid=registrationDao.addUser(reg);
		System.out.println(userid);
	}
	
	
	@Test
	public void testaddCust1() {
		

		
		
				
		System.out.println(registrationDao);
		
		Registration reg1 = new Registration();
		
		reg1.setCustomerName("sarang");
		reg1.setCustomerPhone(7654500987L);
		reg1.setCustomerEmail("riya101@gmail.com");
		reg1.setCustomerUsername("Sarang");
		reg1.setCustomerPassword("sarang@123");
		reg1.setCustomerAddress("pune");
		reg1.setCardType("Gold");
		reg1.setCustomerBank("IDBI");
		reg1.setCustomerAccountNo(23456123);
		reg1.setCustomerIfsc("IDBI1234");
		reg1.setActivation("False");
		
		long userid=registrationDao.addUser(reg1);
		System.out.println(userid);
	}

}
