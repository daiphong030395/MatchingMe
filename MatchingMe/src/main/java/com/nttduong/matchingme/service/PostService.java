package com.nttduong.matchingme.service;

import java.util.List;

import com.nttduong.matchingme.model.Post;

public interface PostService {
	public Post findPostById(int id);
	
	public List<Post> getAllPost();

}
