package com.lti.finance.services;

import java.util.List;

import com.lti.finance.beans.CardDetails;

public interface CardDetailsService {
	 List<CardDetails> getCardDeatils();
	 CardDetails getCardDetailsById(long user_id);
	 long addCardDetails(CardDetails card);

}