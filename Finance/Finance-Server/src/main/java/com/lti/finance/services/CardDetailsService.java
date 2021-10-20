package com.lti.finance.services;

import java.util.List;

import com.lti.finance.beans.CardDetails;

public interface CardDetailsService {
	 List<CardDetails> getCardDeatils();
	 CardDetails getCardDetailsById(long user_id);
	 public String addCardDetails(long userId, int cardType);
	 boolean updateCardDetails(long cardNo,String CardType);
	 long findBalanceByUserId(long user_id,int product_price);
	 

}