package com.lti.finance.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN_LOGIN")
public class AdminLogin {

	@Id
	@GeneratedValue(generator="admin_id")
	@SequenceGenerator(name="admin_id",sequenceName="ADMIN_ID_SEQ",allocationSize=1)
	@Column(name="ADMIN_ID")
	private long adminId;
	@Column(name="ADMIN_NAME")
	private String adminName;
	@Column(name="ADMIN_USERNAME")
	private String adminUsername;
	@Column(name="ADMIN_PASSWORD")
	private String adminPassword;

	public long getAdminId() {
		return adminId;
	}

	public void setAdminId(long adminId) {
		this.adminId = adminId;
	}
	public String getAdminName() {
		return adminName;
	}
	
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

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

	public AdminLogin() {
		super();
	}

	public AdminLogin(long adminId, String adminName, String adminUsername, String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminUsername = adminUsername;
		this.adminPassword = adminPassword;
	}

	@Override
	public String toString() {
		return "AdminLogin [adminId=" + adminId + ", adminName=" + adminName + ", adminUsername=" + adminUsername
				+ ", adminPassword=" + adminPassword + "]";
	}

	


}
