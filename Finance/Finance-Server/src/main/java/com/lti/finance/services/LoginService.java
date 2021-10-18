package com.lti.finance.services;

public interface LoginService {
	public long ValidateUser(String customerUsername, String customerPassword);

	public long ValidateAdmin(String adminUsername, String adminPassword);
}
