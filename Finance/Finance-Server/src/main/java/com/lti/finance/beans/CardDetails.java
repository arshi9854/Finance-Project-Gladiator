package com.lti.finance.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
@Table(name="Card_Details")

public class CardDetails {
	@Id
	@Column(name="CARD_NO")
	@GeneratedValue(generator="CARD_NUMBER_SEQ")
	@SequenceGenerator(name="CARD_NUMBER_SEQ",sequenceName="CARD_NUMBER_SEQ", allocationSize=1)
	private long cardNo;
	@Column(name="VALIDITY")
	private String validity;
	@Column(name="CARD_TYPE")
	private String cardType;
	@Column(name="TOTAL")
	private int total;
	@Column(name="BALANCE")
	private int balance;
	@Column(name="user_id")
	private long userId;
	
	public CardDetails() {
		super();
	}
	
	public CardDetails(String validity, String cardType, int total, int balance, long userId) {
		super();
		this.validity = validity;
		this.cardType = cardType;
		this.total = total;
		this.balance = balance;
		this.userId = userId;
	}
	public long getCardNo() {
		return cardNo;
	}
	public void setCardNo(long cardNo) {
		this.cardNo = cardNo;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}


	public String getValidity() {
		return validity;
	}
	public void setValidity(String validity) {
		this.validity = validity;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	@Override
	public String toString() {
		return "CardDetails [cardNo=" + cardNo + ", validity=" + validity + ", cardType=" + cardType + ", total="
				+ total + ", balance=" + balance + ", userId=" + userId + "]";
	}
	

}
