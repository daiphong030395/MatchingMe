package com.nttduong.matchingme.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nttduong.matchingme.model.Post;
import com.nttduong.matchingme.model.Province;
import com.nttduong.matchingme.model.User;
import com.nttduong.matchingme.service.PostService;
//import com.nttduong.matchingme.service.ProvinceService;
import com.nttduong.matchingme.service.UserService;

@RestController // combination of @Controller and @ResponseBody annotations
public class CRUDRestController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PostService postService;
//	private ProvinceService provinceService;

	// setter
	public void setUserService(UserService u) {
		this.userService = u;
	}

	// Get Single user
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUser(@PathVariable("id") int i) {
		User u = userService.findById(i);
		if (u.getUsername() == null) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
//		System.out.println(u.getUsername());
		return new ResponseEntity<User>(u, HttpStatus.OK);
	}

	// Get All users
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllusers() {
		List<User> list = userService.findAll();
		if (list.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
		
	// Add user
		@RequestMapping(value="/user/new", method = RequestMethod.POST)
		public ResponseEntity<Void> addUser(@RequestBody User user) { 
			
			System.out.println("Username_new: " + user.getUsername());
			System.out.println("Name_new: " + user.getName());
			//not run
			if (userService.isExit(user)) { 		
//			if(userService.findById(user.getIdUser()).getName() != null) {
				return new ResponseEntity<Void>(HttpStatus.CONFLICT); // => 409 Indicates that the request could not be processed because of conflict in the current state of the resource
			}
			System.out.println(userService.isExit(user));
			userService.saveUser(user);
			return new ResponseEntity<Void>(HttpStatus.CREATED); // => 201 The request has been fulfilled, resulting in the creation of a new resource
		}
		
		
		
		
	// Delete user by username ?? not run
//		@RequestMapping(value="/user/{username}", method = RequestMethod.DELETE)
//		public ResponseEntity<Void> deleteUser(@PathParam("username") String username){
//			System.out.println(username + "_'_");
//			userService.deleteByUsername(username);
//			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
//		}
		
		// Delete user
		@RequestMapping(value="/user/{id}", method = RequestMethod.DELETE)
		public ResponseEntity<Void> deleteUserById(@PathVariable("id") int id){
			userService.deleteById(id);
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		
		//Delete all
		@RequestMapping(value="/user/deletes", method = RequestMethod.DELETE)
		public ResponseEntity<Void> deleteAll(){
			userService.deleteAll();
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		
		
		// Update User
		@RequestMapping(value="/user/{id}", method = RequestMethod.PUT)
		public ResponseEntity<User> update(@PathVariable("id") int id, @RequestBody User user){
			User u = userService.findById(id);
			if(u == null) {
				return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
			}
			
			// cannot update username since username is a primary key
			// not run u = user;
			u.setMoneyAccount(user.getMoneyAccount());
			u.setBirthday(user.getBirthday());
			u.setEmail(user.getEmail());
			u.setFacebook(user.getFacebook());
			u.setGender(user.getGender());
			u.setIdCard(user.getIdCard());
			u.setIdDegree(user.getIdDegree());
			u.setIdRight(user.getIdRight());
			u.setId(user.getId());
			u.setIdDistrict(user.getIdDistrict());
			u.setIdProvince(user.getIdProvince());
			u.setName(user.getName());
			u.setPassword(user.getPassword());
			u.setPhone(user.getPhone());
			u.setIdTown(user.getIdTown());
			
			System.out.println("USER_update: "+ u.getName());
			userService.updateUser(u);
			
			return new ResponseEntity<User>(u, HttpStatus.OK);
		}
		
		
		// Check login
		@RequestMapping(value="/login", method = RequestMethod.POST)
		public ResponseEntity<User> checklogin(@RequestBody User user){
//			
//			System.out.println("USER_update: "+ u.getName());
//			userService.updateUser(u);
//			
//			return new ResponseEntity<User>(u, HttpStatus.OK);
			
//			System.out.println("Username: " + user.getUsername());
//			System.out.println("Password: " + user.getPassword());
			User u = userService.findByUsername(user.getUsername());
			System.out.println("pass u: " + u.getPassword());
			System.out.println("pass user: " + user.getPassword());
			if(user.getPassword().equals(u.getPassword())) {
				System.out.println("True");
				System.out.println(u);
				return new ResponseEntity<User>(u, HttpStatus.OK);
			} else {
				System.out.println("False");
				return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
			}
		}
		
		//GET PROVINCE NAME
		@RequestMapping(value="/province", method = RequestMethod.POST) 
		public ResponseEntity<Province> getProvince(@RequestBody Province prv){
			int id = prv.getMatp();
			Province p = new Province();
			p = userService.findProvinceById(id); //--> OK
			System.out.println("Controller_Province_id: " + p.getMatp());
			return new ResponseEntity<Province>(p, HttpStatus.OK);
		}
			//Not working
//		@RequestMapping(value="/getProvince", method = RequestMethod.POST) 
//		public ResponseEntity<Province> getProvince(@RequestBody Province prv){
//			int id = prv.getMatp();
//			Province p = new Province();
//			p = provinceService.getProvinceName(id); //--> DISABLE???
//			System.out.println("Controller_Province_id: " + p.getMatp());
//			return new ResponseEntity<Province>(p, HttpStatus.OK);
//		}
			//GET ok
//		@RequestMapping(value="/getProvince/{id}", method = RequestMethod.GET) //GET ok
//		public ResponseEntity<Province> getProvince(@PathVariable("id") int id){
//			Province p = new Province();
//			p = userService.findProvinceById(id); //--> OK
//			System.out.println("Controller_Province_id: " + p.getMatp());
//			return new ResponseEntity<Province>(p, HttpStatus.OK);
//		}
		// Get All users
		@RequestMapping(value = "/posts", method = RequestMethod.GET)
		public ResponseEntity<List<Post>> listAllPost() {
			List<Post> arrPost = postService.getAllPost();
			if (arrPost.isEmpty()) {
				return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<List<Post>>(arrPost, HttpStatus.OK);
		}
}
