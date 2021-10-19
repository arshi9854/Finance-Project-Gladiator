package com.lti.finance.services;




import java.util.List;

import com.lti.finance.beans.BuyProduct;


public interface BuyProductService {
	List<BuyProduct> getProductListById(long userId);
	BuyProduct addEmi(BuyProduct buyprod);
	List<BuyProduct> getBuyProductListById(long userId);
}
