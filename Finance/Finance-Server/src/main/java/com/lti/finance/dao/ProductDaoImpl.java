package com.lti.finance.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;


import com.lti.finance.beans.Product;

@Repository()
public class ProductDaoImpl implements ProductDao {
    
	@PersistenceContext()
	private EntityManager em;

	@Override
	@Transactional
	public List<Product> getProducts() {
		String sql ="Select product from Product product";
		Query query=em.createQuery(sql);
		List<Product> productList = query.getResultList();
		return productList;
	}

	@Override
	@Transactional
	public int addProduct(Product product) {
		em.persist(product);
		System.out.println("RECORD INSERTED");
		// TODO Auto-generated method stub
		return product.getProductId();
	}

	@Override
	@Transactional
	public Product searchProduct(int productid) {
		// TODO Auto-generated method stub
		Product product = em.find(Product.class,productid);
		System.out.println(product);
		return product;
	}
	
	@Override
	@Transactional
	public void delProduct(int productid) {
		// TODO Auto-generated method stub
		Product product = em.find(Product.class,productid);
		System.out.println(product);
		if(product!=null) {
			em.remove(product);
			System.out.println("PRODUCT DELETED");
		}
		else {
			System.out.println("PRODUCT NOT FOUND");
		}
	}



}
