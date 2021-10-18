package com.lti.finance.controller;

public interface LoginDao{

	public long ValidateUser(String customerUsername, String customerPassword);
	
	public long ValidateAdmin(String adminUsername, String adminPassword);
}
