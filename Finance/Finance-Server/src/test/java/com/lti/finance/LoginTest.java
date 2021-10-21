package com.lti.finance;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lti.finance.dao.LoginDao;

@SpringBootTest
public class LoginTest {
	@Autowired
	LoginDao loginDao;
	
	@Test
	public void ValidateUser()
	{
		long res=loginDao.ValidateUser("riyam","riyam@123");
		System.out.println(res);
	}
	
	@Test
	public void ValidateAdmin()
	{
		long res1=loginDao.ValidateAdmin("riya@123","itsmeriya");
		System.out.println(res1);
	}
	

}
