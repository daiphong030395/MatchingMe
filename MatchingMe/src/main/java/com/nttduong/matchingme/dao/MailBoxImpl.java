package com.nttduong.matchingme.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.nttduong.matchingme.model.MailBox;

public class MailBoxImpl implements MailBoxDao {

	@Autowired
	private SessionFactory sessionFactory;
	
	// setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<MailBox> getMailByUser(int idUser) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<MailBox> listMail = new ArrayList<MailBox>();
		try {
			listMail = (List<MailBox>) session.createQuery("From com.nttduong.matchingme.model.MailBox M WHERE M.idUser=" + idUser)
					.getResultList();;
			System.out.println("(DAO)getMailByIdUser: " + listMail.size());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return listMail;
	}

	@Override
	public void addMail(MailBox mail) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(mail);
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		
	}


}
