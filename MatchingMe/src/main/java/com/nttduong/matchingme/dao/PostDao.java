package com.nttduong.matchingme.dao;

import java.util.List;

import com.nttduong.matchingme.model.Post;

public interface PostDao {

	public Post findPostById(int id);
	
	public Post findPostByType(String type);
	
	public Post findPostByIdUser(int idUser);
	
	public void savePost(Post post);
	
	public void updatePost(Post post);
	
	public void deleteById(int id);
	
	public List<Post> getAllPost();
	
}
