package com.nttduong.matchingme.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.nttduong.matchingme.model.Post;


public class PostDaoImpl implements PostDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	// setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public Post findPostById(int id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.Id = " + id)
					.getSingleResult();
			System.out.println("ProvinceDAO_getPostById: " + p.getIdClass());
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

	@Override
	public Post findPostByType(String type) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.Type = " + type)
					.getSingleResult();
			System.out.println("DAO(FindByType)"+p.getId());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return p;
	}

	@Override
	public Post findPostByIdUser(int idUser) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.Id_User = " + idUser)
					.getSingleResult();
			System.out.println("DAO(FindByIdUser)"+p.getId());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return p;
	}

	@Override
	public void savePost(Post post) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(post);
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		
	}

	@Override
	public void deleteById(int id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.id = " + id)
					.getSingleResult();
			session.delete(p);
			System.out.println("DAO-DeleteById-OK: " +p.getId());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		
	}

	@Override
	public void updatePost(Post post) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		if (post != null) {
			try {
				System.out.println("DAO(UpdatePost): " + post.getId());
				
				//c1: .update(user)
				
				session.update(post);
				transaction.commit();
			} catch (Exception e) {
				transaction.rollback();
			}
		}
		session.close();
		
	}


}

