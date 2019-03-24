package com.nttduong.matchingme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttduong.matchingme.dao.PostDao;
import com.nttduong.matchingme.model.Post;

@Service
public class PostService {

	@Autowired
	private PostDao postDao;
	
	// setter for customerDao
	public void setProvinceDao(PostDao prDao) {
		this.postDao = prDao;
	}
	
	public Post getProvinceName(int id) {
		return postDao.findProvinceById(id);
	}
	
	public List<Post> getAllPost() {
		return postDao.getAllPost();
	}
}
