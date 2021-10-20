package com.lti.finance.services;



import java.util.List;

import com.lti.finance.beans.Registration;


public interface RegistrationService {

	public long addUser(Registration e);
	public List<Registration> viewUsers();
	public String approveUser(long userId);
	public boolean checkActivation(long userId);
	public String deleteUser(long userId);
}
