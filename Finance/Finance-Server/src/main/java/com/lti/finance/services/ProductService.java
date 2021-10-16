package com.lti.finance.services;

import java.util.List;

import com.lti.finance.beans.Product;

public interface ProductService {
	List<Product> getProducts();
	int addProduct(Product product);
    void delProduct(int productid);
    Product searchProduct(int productid);
}
