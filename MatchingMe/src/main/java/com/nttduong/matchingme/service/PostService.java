package com.nttduong.matchingme.service;

import java.util.List;

import com.nttduong.matchingme.model.Feedback;
import com.nttduong.matchingme.model.Post;

public interface PostService {
	public Post findPostById(int id);
	
	public List<Post> findPostByType(String type);
	
	public List<Post> findPostBySubject(int idSubject);
	
	public List<Post> findPostByIdUser(int idUser);
	
	public void savePost(Post post);
	
	public void deleteById(int id);
	
	public List<Post> getAllPost();

	public void addFeedback(Feedback fb);
	public List<Feedback> getFeedback();
	public void deleteFBById(int id);

}
