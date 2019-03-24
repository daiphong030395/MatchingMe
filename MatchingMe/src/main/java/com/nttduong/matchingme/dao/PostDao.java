package com.nttduong.matchingme.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.nttduong.matchingme.model.Post;




public class PostDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	// setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public Post findProvinceById(int id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.matp = " + id)
					.getSingleResult();
			System.out.println("ProvinceDAO_getProvinceById: " + p.getIdClass());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return p;
	}
	
	@SuppressWarnings("unchecked")
	public List<Post> getAllPost() {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Post> arrPost = new ArrayList<Post>();
		try {
			arrPost = session.createQuery("From com.nttduong.matchingme.model.Post").getResultList();
			System.out.println("ProvinceDAO_getProvinceById: " + arrPost);
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return arrPost;
	}
	
}
