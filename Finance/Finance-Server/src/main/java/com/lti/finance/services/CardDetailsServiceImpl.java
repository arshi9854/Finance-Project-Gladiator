package com.lti.finance.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.finance.beans.CardDetails;
import com.lti.finance.dao.CardDetailsDao;
@Service("CardDetails")
public class CardDetailsServiceImpl implements CardDetailsService {
	@Autowired
	CardDetailsDao dao;
	public CardDetailsDao getDao() {
		return dao;
	}

	public void setDao(CardDetailsDao dao) {
		this.dao = dao;
	}

	@Override
	public List<CardDetails> getCardDeatils() {
		// TODO Auto-generated method stub
		List<CardDetails> customerlist = dao.getCardDetails();
		return customerlist;
	}

	@Override
	public CardDetails getCardDetailsById(long user_id) {
		// TODO Auto-generated method stub
		CardDetails card = dao.getCardDetailsById(user_id);
		return card;
	}
	
	@Override
	public long addCardDetails(CardDetails card) {
		// TODO Auto-generated method stub
		return dao.addCardDetails(card);
	}

	

}
