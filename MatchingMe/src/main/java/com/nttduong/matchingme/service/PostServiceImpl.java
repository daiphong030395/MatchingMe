package com.nttduong.matchingme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttduong.matchingme.dao.PostDao;
import com.nttduong.matchingme.model.Feedback;
import com.nttduong.matchingme.model.Post;

@Service
public class PostServiceImpl implements PostService {
	@Autowired
	private PostDao postDao;
	
	// setter for PostDao
	public void setPostDao(PostDao prDao) {
		this.postDao = prDao;
	}
	
	public List<Post> getAllPost() {
		return postDao.getAllPost();
	}

	@Override
	public Post findPostById(int id) {
		// TODO Auto-generated method stub
		return postDao.findPostById(id);
	}

	@Override
	public List<Post> findPostByType(String type) {
		// TODO Auto-generated method stub
		return postDao.findPostByType(type);
	}

	@Override
	public List<Post> findPostBySubject(int idSubject) {
		// TODO Auto-generated method stub
		return postDao.findPostBySubject(idSubject);
	}
	
	@Override
	public List<Post> findPostByIdUser(int idUser) {
		// TODO Auto-generated method stub
		return postDao.findPostByIdUser(idUser);
	}
	
	@Override
	public void savePost(Post post) {
		postDao.savePost(post);		
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		postDao.deleteById(id);
	}


	@Override
	public void addFeedback(Feedback fb) {
		postDao.addFeedback(fb);		
	}

	@Override
	public List<Feedback> getFeedback() {
		// TODO Auto-generated method stub
		return postDao.getFeedback();
	}

	@Override
	public void deleteFBById(int id) {
		postDao.deleteFBById(id);		
	}


}
