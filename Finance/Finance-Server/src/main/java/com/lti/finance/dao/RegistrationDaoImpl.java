package com.lti.finance.dao;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.lti.finance.beans.Registration;
import com.lti.finance.services.MailService;

//Spring Stereotype-

@Repository
public class RegistrationDaoImpl implements RegistrationDao {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	private MailService notificationService;
	
	@Override
	@Transactional
	public long addUser(Registration e) {
		System.out.println("inside dao");
		try {
			em.persist(e);
			notificationService.sendEmailForConfirmation(e);
			System.out.println("added");
		} catch (Exception e1) {
			System.out.println(e1.getMessage());
		}
		return e.getUserId();
	}
	
	@Override
	@Transactional
	public String deleteUser(long userId) {
		try {
			Registration user = em.find(Registration.class, userId);
			em.remove(user);
			System.out.println("added");
		} catch (Exception e1) {
			System.out.println(e1.getMessage());
		}
		return "User Removed";
	}

	@Override
	@Transactional
	public List<Registration> viewUsers() {
		String sql = "select users from Registration users";
		Query query = em.createQuery(sql);
		List<Registration> userList = query.getResultList();
		return userList;
	}

	@Override
	@Transactional
	public String approveUser(long userId) {
		String sql = "update Registration set activation=:approve where id =:userId";
		Query query = (Query) this.em.createQuery(sql);
		query.setParameter("approve", "true");
		query.setParameter("userId", userId);
		query.executeUpdate();
		return "User Approved";
	}

	@Override
	@Transactional
	public boolean checkActivation(long id) {
		String sql = "select activation from Registration where userId=:id";
		Query query = (Query) em.createQuery(sql);
		query.setParameter("id", id);
		String res = (String) query.getSingleResult().toString();
		return Boolean.parseBoolean(res);
	}
	
	public void upload(MultipartFile file) throws IOException {
		 file.transferTo(new File("D:\\Downloads\\"+file.getOriginalFilename()));
	}

	@Override
	public String getUserName(long userId) {
		// TODO Auto-generated method stub
		String sql = "select customerName from Registration where userId=:userId";
		Query query = (Query) em.createQuery(sql);
		query.setParameter("userId",userId);
		String res = (String) query.getSingleResult().toString();
		return res;
		
	}

}
