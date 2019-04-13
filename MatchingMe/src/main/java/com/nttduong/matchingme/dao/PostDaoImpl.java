package com.nttduong.matchingme.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import com.nttduong.matchingme.model.Feedback;
import com.nttduong.matchingme.model.Post;


public class PostDaoImpl implements PostDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	// setter for sessionFactory
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	// get a post by id
	@Override
	public Post findPostById(int id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		Post p = new Post();
		try {
			p = (Post) session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.Id = " + id)
					.getSingleResult();
			System.out.println("DAO-getPostById: " + p.getId());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return p;
	}

	// get all posts
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
	
	// get all post by type
	@SuppressWarnings("unchecked")
	@Override
	public List<Post> findPostByType(String type) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Post> listPosts = new ArrayList<Post>();
		try {
			listPosts = session.createQuery("from com.nttduong.matchingme.model.Post P WHERE P.type =?").setParameter(0,type)
					.getResultList();
			System.out.println("DAO(FindByType)"+listPosts.size());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return listPosts;
	}

	//get all posts by id Subject
	@SuppressWarnings("unchecked")
	@Override
	public List<Post> findPostBySubject(int idSubject) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Post> listPosts = new ArrayList<Post>();
		try {
			listPosts = session.createQuery("from com.nttduong.matchingme.model.Post P WHERE P.idSubject =?").setParameter(0,idSubject)
					.getResultList();
			System.out.println("DAO(FindBySubject)"+listPosts.size());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return listPosts;
	}
	
	//get all posts by idUser
	@SuppressWarnings("unchecked")
	@Override
	public List<Post> findPostByIdUser(int idUser) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Post> listPosts = new ArrayList<Post>();
		try {
			listPosts = session.createQuery("From com.nttduong.matchingme.model.Post P WHERE P.idUser=?").setParameter(0, idUser)
					.getResultList();
			System.out.println("DAO(FindByIdUser)"+listPosts.size());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return listPosts;
	}

	//add a post
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
	
	//delete post by id
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

	// update post
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

	//FEEDBACK: add a feedback
	@Override
	public void addFeedback(Feedback fb) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		try {
			session.save(fb);
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
	}

	//FEEDBACK: get all feedbacks
	@SuppressWarnings("unchecked")
	@Override
	public List<Feedback> getFeedback() {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		List<Feedback> listFBs = new ArrayList<Feedback>();
		try {
			listFBs = session.createQuery("From com.nttduong.matchingme.model.Feedback").getResultList();
			System.out.println("FEEDBACK-dao: " + listFBs.size());
			transaction.commit();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			transaction.rollback();
		}
		session.close();
		return listFBs;
	}

	


}

