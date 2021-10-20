package com.lti.finance.dao;

import java.util.List;
import java.text.SimpleDateFormat;  
import java.util.Date;  
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.finance.beans.CardDetails;

@Repository()
public class CardDetailsDaoImpl implements CardDetailsDao {
	@PersistenceContext
	EntityManager em;

	@Override
	public List<CardDetails> getCardDetails() {
		String sql = "Select card from CardDetails card";
		Query query = em.createQuery(sql);
		List<CardDetails> customerlist = query.getResultList();
		return customerlist;
	}

	@Override
	public CardDetails getCardDetailsById(long user_id) {
		String sql = "select card from CardDetails card where card.userId=:userId";
		Query query = em.createQuery(sql, CardDetails.class);
		query.setParameter("userId", user_id);
		CardDetails card = (CardDetails) query.getSingleResult();
		System.out.println(card.getValidity());

		return card;
	}

	@Override
	@Transactional
	public String addCardDetails(long userId, int cardType) {
		CardDetails card = new CardDetails();
		Date date = new Date();  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yy");  
	    String strDate= formatter.format(date);
		card.setUserId(userId);
		if(cardType==1) {
			card.setCardType("Gold");
			card.setTotal(100000);
			card.setBalance(100000);
			int years = 2;
		    String validity =strDate.substring(0,7)+ Integer.toString((Integer.parseInt(strDate.substring(strDate.length()-2)) + years));
		    card.setValidity(validity);
		}
		else {
			card.setCardType("Titanium");
			card.setTotal(200000);
			card.setBalance(200000);
			int years = 3;
		    String validity =strDate.substring(0,7)+ Integer.toString((Integer.parseInt(strDate.substring(strDate.length()-2)) + years));
		    card.setValidity(validity);
		}
		this.em.persist(card);
		return "Card Generated Successfully";
	}

	@Override
	@Transactional
	public boolean updateCardDetails(long cardNo, String CardType) {
		// TODO Auto-generated method stub

		/*
		 * CardDetails c = em.find(CardDetails.class, cardNo); if(c==null) { throw new
		 * Exception("No record found"); }else { return false; }
		 */
		CardDetails c = em.find(CardDetails.class, cardNo);
		c.setCardType(CardType);
		try {
			em.merge(cardNo);
		} catch (Exception e) {
			return false;
		}
		return true;

	}

	@Override
	@Transactional
	public long findBalanceByUserId(long user_id, int product_price) {
		String sql = "select card from CardDetails card where card.userId=:userId";
		Query query = em.createQuery(sql);
		query.setParameter("userId", user_id);
		CardDetails card = (CardDetails) query.getSingleResult();
		int remaining_balance = card.getBalance();
		if (remaining_balance < product_price)
			return -1;
		else {
			remaining_balance -= product_price;
			String sql1 = "update CardDetails card set card.balance=:remaining_balance where card.userId=:userId";
			Query query1 = em.createQuery(sql1);
			query1.setParameter("userId", user_id);
			query1.setParameter("remaining_balance", remaining_balance);
			int res=query1.executeUpdate();
	
			return res;
		}

	}
}
