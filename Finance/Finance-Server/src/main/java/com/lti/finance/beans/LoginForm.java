package com.lti.finance.beans;

public class LoginForm {

	int userId;
	String CustomerUsername;
	String CustomerPassword;

	public String getCustomerUsername() {
		return CustomerUsername;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setCustomerUsername(String customerUsername) {
		CustomerUsername = customerUsername;
	}

	public String getCustomerPassword() {
		return CustomerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		CustomerPassword = customerPassword;
	}

	public LoginForm(String customerUsername, String customerPassword) {
		super();
		CustomerUsername = customerUsername;
		CustomerPassword = customerPassword;
	}

	@Override
	public String toString() {
		return "LoginForm [userId=" + userId + ", CustomerUsername=" + CustomerUsername + ", CustomerPassword="
				+ CustomerPassword + "]";
	}

	public LoginForm() {
		super();
	}
}
