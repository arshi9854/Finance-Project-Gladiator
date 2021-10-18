package com.lti.finance.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;


import com.lti.finance.beans.CardDetails;
@Repository()
public class CardDetailsDaoImpl implements CardDetailsDao {
	@PersistenceContext
	EntityManager  em;

	@Override
	public List<CardDetails> getCardDetails() {
		String sql ="Select card from CardDetails card";
		Query query=em.createQuery(sql);
		List<CardDetails> customerlist = query.getResultList();
		return customerlist;
	}

	@Override
	public CardDetails getCardDetailsById(long user_id) {
		String sql = "select card from CardDetails card where card.userId=:userId";
		Query query = em.createQuery(sql,CardDetails.class);
		query.setParameter("userId", user_id);
		CardDetails card = (CardDetails) query.getSingleResult();
		return card;
	}
	
	@Override
	@Transactional
	public long addCardDetails(CardDetails card) {
		em.persist(card);
		System.out.println("RECORD INSERTED");
		// TODO Auto-generated method stub
		return card.getCardNo();
	}


	



	
	

	
		
	
}
