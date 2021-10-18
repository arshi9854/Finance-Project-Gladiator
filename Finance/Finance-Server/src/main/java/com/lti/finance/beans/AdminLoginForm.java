package com.lti.finance.beans;

public class AdminLoginForm {

	private String adminUsername;
	private String adminPassword;

	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public AdminLoginForm(String adminUsername, String adminPassword) {
		super();
		this.adminUsername = adminUsername;
		this.adminPassword = adminPassword;
	}

	@Override
	public String toString() {
		return "AdminLoginForm [adminUsername=" + adminUsername + ", adminPassword=" + adminPassword + "]";
	}

	public AdminLoginForm() {
		super();
	}
}
