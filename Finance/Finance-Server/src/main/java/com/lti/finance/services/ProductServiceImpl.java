package com.lti.finance.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.finance.beans.Product;
import com.lti.finance.dao.ProductDao;


@Service("productService")
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductDao dao;

	public ProductDao getDao() {
		return dao;
	}

	public void setDao(ProductDao dao) {
		this.dao = dao;
	}

	@Override
	public List<Product> getProducts() {
		// TODO Auto-generated method stub
		List<Product> productList = dao.getProducts();
		return productList;
	}

	@Override
	public int addProduct(Product product) {
		// TODO Auto-generated method stub
		return dao.addProduct(product);
	}

	@Override
	public void delProduct(int productid) {
		// TODO Auto-generated method stub
		dao.delProduct(productid);
		
	}

}
