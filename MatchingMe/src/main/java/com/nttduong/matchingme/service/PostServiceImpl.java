package com.nttduong.matchingme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttduong.matchingme.dao.PostDao;
import com.nttduong.matchingme.model.Post;

@Service
public class PostServiceImpl implements PostService {
	@Autowired
	private PostDao postDao;
	
	// setter for customerDao
	public void setPostDao(PostDao prDao) {
		this.postDao = prDao;
	}
	
	
	public List<Post> getAllPost() {
		return postDao.getAllPost();
	}

	@Override
	public Post findPostById(int id) {
		// TODO Auto-generated method stub
		return this.findPostById(id);
	}

}
