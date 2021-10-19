package com.lti.finance.beans;

public class changePassword {

	long userId;
	String newPassword;

	public changePassword() {
		super();
	}

	public changePassword(long userId, String newPassword) {
		super();
		this.userId = userId;
		this.newPassword = newPassword;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "changePassword [userId=" + userId + ", newPassword=" + newPassword + "]";
	}

}
