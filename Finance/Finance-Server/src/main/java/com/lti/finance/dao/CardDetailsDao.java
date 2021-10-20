package com.lti.finance.dao;

import java.util.List;

import com.lti.finance.beans.CardDetails;

public interface CardDetailsDao {
	 List<CardDetails> getCardDetails();
	 CardDetails getCardDetailsById(long user_id);
	 boolean updateCardDetails(long cardNo,String CardType);
	 long findBalanceByUserId(long user_id,int product_price);
	 public String addCardDetails(long userId, int cardType);
}
