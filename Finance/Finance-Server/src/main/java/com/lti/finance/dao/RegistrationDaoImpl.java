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
		// TODO Auto-generated method stub
		System.out.println("inside dao");
		
  
		
	          
	        try {
//	        	String sql="INSERT INTO Registration(userId,customerName, customerPhone, customerEmail,customerUsername,customerPassword,"
//	        			+ "customerAddress,cardType,customerBank,customerAccountNo,customerIfsc,activation) "
//	        			+ "values(:user_id,:name,:no,:email,:username,:passwrd,:addrs,:cardtype,:bank,:accntno,:ifsc,:activation)";
//	        	Query qrt=em.createQuery(sql)  ;
//	        	
//	        	qrt.setParameter("user_id", e.getUserId());
//	        	qrt.setParameter("name",e.getCustomerName() );
//	        	qrt.setParameter("email",e.getCustomerEmail() );
//	        	qrt.setParameter("username",e.getCustomerUsername() );
//	        	qrt.setParameter("passwrd",e.getCustomerPassword() );
//	        	qrt.setParameter("addrs",e.getCustomerAddress() );
//	        	qrt.setParameter("cardtype",e.getCardType() );
//	        	qrt.setParameter("bank",e.getCustomerBank() );
//	        	qrt.setParameter("accntno",e.getCustomerAccountNo() );
//	        	qrt.setParameter("ifsc",e.getCustomerIfsc() );
//	        	qrt.setParameter("activation","False" );
//	        	
//	        	qrt.executeUpdate();
//	        	
	        	
        	
	            em.persist(e);
	            System.out.println("added");
	            
	              
	        } catch (Exception e1) {  
	            System.out.println(e1.getMessage()); 
	        }  
	        
	      

		return e.getUserId();
	}

}
