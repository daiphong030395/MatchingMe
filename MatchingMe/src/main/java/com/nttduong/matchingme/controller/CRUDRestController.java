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
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nttduong.matchingme.model.Address;
import com.nttduong.matchingme.model.District;
import com.nttduong.matchingme.model.Province;
import com.nttduong.matchingme.model.Town;
import com.nttduong.matchingme.model.User;
import com.nttduong.matchingme.service.UserService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController // combination of @Controller and @ResponseBody annotations
public class CRUDRestController {

	@Autowired
	private UserService userService;
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
			return new ResponseEntity<Void>(HttpStatus.CONFLICT); // => 409 Indicates that the request could not be processed because of conflict in the current state of the resource
		}
		System.out.println(userService.isExit(user));
		userService.saveUser(user);
		return new ResponseEntity<Void>(HttpStatus.CREATED); // => 201 The request has been fulfilled, resulting in the creation of a new resource
	}
		//Insert new user from react-app
		@RequestMapping(value="/insert-user", method = RequestMethod.POST)
		public ResponseEntity<User> insertUser(@RequestBody User user) { 
			System.out.println("isExit:"+ userService.isExit(user));
			userService.saveUser(user);
			return new ResponseEntity<User>(user,HttpStatus.CREATED); // => 201 The request has been fulfilled, resulting in the creation of a new resource
		}
		
	//Check User by username
		@RequestMapping(value="/check-user-by-username", method = RequestMethod.PUT)
		public ResponseEntity<User> checkUsername(@RequestBody User user) {
			String username = user.getUsername();
			User u = userService.findByUsername(username);
			if (u.getUsername() == null) {			
				return new ResponseEntity<User>(u,HttpStatus.NO_CONTENT); 
			} else {
				return new ResponseEntity<User>(u,HttpStatus.CONFLICT);
			}
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
//			System.out.println("!!!!! REQUEST BODY: " + user.getId() +", " + user.getUsername() + ", " + user.getName());
			User u = userService.findById(id);
			if(u == null) {
				return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
			}
			
			System.out.println("REQUEST BODY: " + user.getId() +", " + user.getUsername() + ", " + user.getName());
			// cannot update username since username is a primary key
			// not run u = user;
			u.setBirthday(user.getBirthday());
			u.setEmail(user.getEmail());
			u.setFacebook(user.getFacebook());
			u.setGender(user.getGender());
			u.setIdCard(user.getIdCard());
			u.setIdDegree(user.getIdDegree()); 
			u.setIdDistrict(user.getIdDistrict());
			u.setIdProvince(user.getIdProvince());
			u.setName(user.getName());
			u.setPassword(user.getPassword());
			u.setPhone(user.getPhone());
			u.setIdTown(user.getIdTown());
			
			System.out.println("UpdateById(Controller) : "+ u.getUsername());
			userService.updateUser(u);
			
			return new ResponseEntity<User>(u, HttpStatus.OK);
		}
		
		//API for React-app
//		@RequestMapping(value="/updateUser", method = RequestMethod.PUT)
//		public ResponseEntity<User> updateUser(@RequestBody User user){
//			if(user == null) {
//				return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
//			}			
//			System.out.println("USER_update: "+ user.getName());
//			userService.updateUser(user);
//			
//			return new ResponseEntity<User>(user, HttpStatus.OK);
//		}
		
		
		// Check login
		@RequestMapping(value="/login", method = RequestMethod.POST)
		public ResponseEntity<User> checklogin(@RequestBody User user){
			User u = userService.findByUsername(user.getUsername());
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
		
		//GET PROVINCE NAME
		@RequestMapping(value="/getAddress", method = RequestMethod.POST) 
		public ResponseEntity<Address> getAddress(@RequestBody Address ad){
			//find name of province, district, town
			int idTown = ad.getIdTown();
			int idDist = ad.getIdDistrict();
			int idProv = ad.getIdProvince();
			Province p = userService.findProvinceById(idProv); //--> OK
			District d = userService.findDistrictById(idDist);
			Town t = userService.findTownById(idTown);
			//set address
			ad.setNameProvince(p.getName());
			ad.setNameDistrict(d.getName());
			ad.setNameTown(t.getName());
			ad.setAddress();

			System.out.println("Controller_(Address)_id: " + p.getMatp());
			return new ResponseEntity<Address>(ad, HttpStatus.OK);
		}
		
			
		
}
