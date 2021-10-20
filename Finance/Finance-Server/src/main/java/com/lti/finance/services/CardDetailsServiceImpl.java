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
	public String addCardDetails(long userId, int cardType) {
		return dao.addCardDetails(userId,cardType);
	}
	@Override
	public boolean updateCardDetails(long cardNo,String CardType) {
		return dao.updateCardDetails(cardNo,CardType);
	}
	@Override
	public long findBalanceByUserId(long user_id,int product_price) {
		return dao.findBalanceByUserId(user_id,product_price);
	}
	
	

	

}