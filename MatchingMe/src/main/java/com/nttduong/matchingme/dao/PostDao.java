package com.nttduong.matchingme.dao;

import java.util.List;

import com.nttduong.matchingme.model.Post;

public interface PostDao {

	public Post findPostById(int id);
	
	public List<Post> getAllPost();
}
