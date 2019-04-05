package com.nttduong.matchingme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nttduong.matchingme.model.Feedback;
import com.nttduong.matchingme.model.Post;
import com.nttduong.matchingme.service.PostService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController // combination of @Controller and @ResponseBody annotations
public class PostController {
	@Autowired
	private PostService postService;
	
	//Add a post
	@RequestMapping(value="/add-post", method = RequestMethod.POST)
	public ResponseEntity<Void> addPost(@RequestBody Post post) {
		postService.savePost(post);
		return new ResponseEntity<Void>(HttpStatus.CREATED); // => 201 The request has been fulfilled, resulting in the creation of a new resource
	}
	
	// Get All users
	@RequestMapping(value = "/posts", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> listAllPosts() {
		List<Post> arrPost = postService.getAllPost();
		if (arrPost.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(arrPost, HttpStatus.OK);
	}	
	
	// Get posts by type
	@RequestMapping(value = "/get-posts-by-type/{type}", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> getPostsByType(@PathVariable("type") String type) {
		List<Post> listPosts = postService.findPostByType(type);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	//Get Posts by id_User
	@RequestMapping(value = "/get-posts-by-id-user", method = RequestMethod.PUT)
	public ResponseEntity<List<Post>> getPostsByIdUser(@RequestBody Post post) {
		int idUser = post.getIdUser();
		List<Post> listPosts = postService.findPostByIdUser(idUser);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	//or
	@RequestMapping(value = "/get-posts/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> getPostsByIdUser(@PathVariable("idUser") int idUser) {
//		int idUser = post.getIdUser();
		List<Post> listPosts = postService.findPostByIdUser(idUser);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	//FEEDBACK:
	//Add a feedback
	@RequestMapping(value="/add-feedback", method = RequestMethod.POST)
	public ResponseEntity<Void> addPost(@RequestBody Feedback fb) {
		postService.addFeedback(fb);
		return new ResponseEntity<Void>(HttpStatus.CREATED); // => 201 The request has been fulfilled, resulting in the creation of a new resource
	}
	//Get all feedbacks
	@RequestMapping(value="/feedbacks", method = RequestMethod.GET)
	public ResponseEntity<List<Feedback>> getFeedback() {
		List<Feedback> listFbs = postService.getFeedback();
		if (listFbs.isEmpty()) {
			return new ResponseEntity<List<Feedback>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Feedback>>(listFbs, HttpStatus.OK);
	}
}
