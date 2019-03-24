package com.nttduong.matchingme.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.nttduong.matchingme.model.Province;


public class ProvinceDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	// setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public Province findProvinceById(int id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Province p = new Province();
		try {
			p = (Province) session.createQuery("From com.nttduong.matchingme.model.Province P WHERE P.matp = " + id)
					.getSingleResult();
			System.out.println("ProvinceDAO_getProvinceById: " + p.getName());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return p;
	}
	
}
