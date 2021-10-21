package com.lti.finance;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.lti.finance.dao.BuyProductDao;


@SpringBootTest
public class BuyProductTest {
	
	@Autowired
	BuyProductDao buyProductDao;
	
	@Test
	public void getProductListById()
	{
		
		buyProductDao.getBuyProductListById(10600000);
	}
	
	

}
