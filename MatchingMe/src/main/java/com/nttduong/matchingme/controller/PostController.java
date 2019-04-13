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
import com.nttduong.matchingme.model.MailBox;
import com.nttduong.matchingme.model.Post;
import com.nttduong.matchingme.service.MailBoxService;
import com.nttduong.matchingme.service.PostService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController // combination of @Controller and @ResponseBody annotations
public class PostController {
	@Autowired
	private PostService postService;
	
	@Autowired
	private MailBoxService mailService;
	
	//Add a post
	@RequestMapping(value="/new/post", method = RequestMethod.POST)
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
	@RequestMapping(value = "/posts-by-type/{type}", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> getPostsByType(@PathVariable("type") String type) {
		List<Post> listPosts = postService.findPostByType(type);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	// Get posts by id subject
	@RequestMapping(value = "/posts-by-subject/{idSubject}", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> getPostsBySubject(@PathVariable("idSubject") int idSubject) {
		List<Post> listPosts = postService.findPostBySubject(idSubject);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}		
	//Get Posts by id_User
	@RequestMapping(value = "/posts-by-id-user", method = RequestMethod.PUT)
	public ResponseEntity<List<Post>> getPostsByIdUser(@RequestBody Post post) {
		int idUser = post.getIdUser();
		List<Post> listPosts = postService.findPostByIdUser(idUser);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	//or
	@RequestMapping(value = "/posts/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> getPostsByIdUser(@PathVariable("idUser") int idUser) {
		List<Post> listPosts = postService.findPostByIdUser(idUser);
		if (listPosts.isEmpty()) {
			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	//FEEDBACK:
	//Add a feedback
	@RequestMapping(value="/new/feedback", method = RequestMethod.POST)
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
	//Get MailBox by IdUser
	@RequestMapping(value="/mailboxes/{idUser}", method = RequestMethod.GET)
	public ResponseEntity<List<MailBox>> getMail(@PathVariable("idUser") int idUser) {
		List<MailBox> list = mailService.getMailByUser(idUser);
		if (list.isEmpty()) {
			return new ResponseEntity<List<MailBox>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<MailBox>>(list, HttpStatus.OK);
	}
}
