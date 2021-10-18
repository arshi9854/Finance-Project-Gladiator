package com.lti.finance.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.finance.beans.Registration;

//Spring Stereotype-

@Repository
public class RegistrationDaoImpl implements RegistrationDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public long addUser(Registration e) {
		System.out.println("inside dao");

		try {

			em.persist(e);
			System.out.println("added");

		} catch (Exception e1) {
			System.out.println(e1.getMessage());
		}

		return e.getUserId();
	}

}
