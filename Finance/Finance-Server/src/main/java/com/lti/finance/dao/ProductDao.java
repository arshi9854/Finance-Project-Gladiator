package com.lti.finance.dao;

import java.util.List;

import com.lti.finance.beans.Product;

public interface ProductDao {
	List<Product> getProducts();
	int addProduct(Product product);
    void delProduct(int productid);
    Product searchProduct(int productid);
 
}
