package com.lti.finance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.finance.beans.CardDetails;
import com.lti.finance.services.CardDetailsServiceImpl;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("card")
public class CardsController {
	
	@Autowired
	CardDetailsServiceImpl CardDetailsService;
	
	
	@GetMapping("/")
	public List<CardDetails> getCardDeatils(){
		return CardDetailsService.getCardDeatils();
	}
	
	
	@GetMapping("/{user_id}")
	public CardDetails getCardDetailsById(@PathVariable("user_id") long userId ) {
		return CardDetailsService.getCardDetailsById(userId);
				}

	
	
	
	@PostMapping("/add")
	public long addProduct(@RequestBody CardDetails card) {
		return CardDetailsService.addCardDetails(card);
	}

	/*@PutMapping("/update/{CARD_NO}/{CARD_TYPE}")
	public boolean updateCardDetails(@PathVariable("CARD_NO")long cardNo,@PathVariable("CARD_TYPE")String CardType) {
		return CardDetailsService.updateCardDetails(cardNo,CardType);
	
	}}*/
	@GetMapping("/{user_id}/{product_price}")
	public long findBalanceByUserId(@PathVariable("user_id") long userId,@PathVariable("product_price")int ProductPrice  ) {
	return CardDetailsService.findBalanceByUserId(userId,ProductPrice);
			}}