package com.lti.finance.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import com.lti.finance.beans.BuyProduct;
import com.lti.finance.beans.Product;
import com.lti.finance.beans.Registration;

@Repository()
public class BuyProductDaoImpl implements BuyProductDao {
	@PersistenceContext
	EntityManager em;

	@Override
	@Transactional
	public List<BuyProduct> getProductListById(long userId) {
		// TODO Auto-generated method stub
		String sql = "select product from BuyProduct product where userId=:userId";
		Query query = em.createQuery(sql);
		query.setParameter("userId", userId);
		List<BuyProduct> products = (List<BuyProduct>) query.getResultList();
		return products;
	}

	@Override
	@Transactional
	public BuyProduct addEmi(BuyProduct buyprod) {
		System.out.println(buyprod);
		em.persist(buyprod);
		return buyprod;
	}

	@Override
	public List<BuyProduct> getBuyProductListById(long userId) {
		String sql = "select product from BuyProduct product where userId=:userId";
		Query query = em.createQuery(sql);
		query.setParameter("userId", userId);
		List<BuyProduct> products = (List<BuyProduct>) query.getResultList();
		return products;
	}
}
