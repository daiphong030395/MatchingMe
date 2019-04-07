package com.nttduong.matchingme.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "post", catalog = "matchingme1", uniqueConstraints = @UniqueConstraint(columnNames = "Id"))
public class Post implements Serializable {
	
	/**
	 * ID default
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column
	private int id;
	
	@Column(name="Id_User")
	private int idUser;
	
	@Column(name="Type")
	private String type;
	
	@Column(name="Address_area")
	private String area;
	
	@Column(name="Address_detail")
	private String address_detail;
	
	@Column(name="SessionsPerWeek")
	private int sessions;
	
	@Column(name="Id_Class")
	private int idClass;
	
	@Column(name="PhoneNumber")
	private int phoneNumber;
	
	@Column(name="Id_Subject")
	private int idSubject;
	
	@Column(name="Salary")
	private int salary;
	
	@Column(name="Title")
	private String title;
	
	@Column(name="Status")
	private boolean status;
	
	@Column(name="userReceive")
	private int userReceive;
	
	@Column(name="Description")
	private String description;

	
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getSessions() {
		return sessions;
	}
	public void setSessions(int sessions) {
		this.sessions = sessions;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public int getUserReceive() {
		return userReceive;
	}
	public void setUserReceive(int userReceive) {
		this.userReceive = userReceive;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIdUser() {
		return idUser;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	
	public int getIdClass() {
		return idClass;
	}
	public void setIdClass(int idClass) {
		this.idClass = idClass;
	}
	public int getIdSubject() {
		return idSubject;
	}
	public void setIdSubject(int idSubject) {
		this.idSubject = idSubject;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAddress_area() {
		return area;
	}
	public void setAddress_area(String address_area) {
		this.area = address_area;
	}
	public String getAddress_detail() {
		return address_detail;
	}
	public void setAddress_detail(String address_detail) {
		this.address_detail = address_detail;
	}
	public int getSessionsPerWeek() {
		return sessions;
	}
	public void setSessionsPerWeek(int sessionsPerWeek) {
		this.sessions = sessionsPerWeek;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	//CONSTRUCTOR
	public Post() {
		super();
	}
	public Post(int idUser, String type, String address_area, String address_detail, int sessionsPerWeek, int idClass,
			int phoneNumber, int idSubject, int salary, String title, String description) {
		super();
		this.idUser = idUser;
		this.type = type;
		this.area = address_area;
		this.address_detail = address_detail;
		this.sessions = sessionsPerWeek;
		this.idClass = idClass;
		this.phoneNumber = phoneNumber;
		this.idSubject = idSubject;
		this.salary = salary;
		this.title = title;
		this.description = description;
	}

	public Post(int idUser, String type, String area, String address_detail, int sessions, int idClass, int phoneNumber,
			int idSubject, int salary, String title, boolean status,int userReceive, String description) {
		super();
		this.idUser = idUser;
		this.type = type;
		this.area = area;
		this.address_detail = address_detail;
		this.sessions = sessions;
		this.idClass = idClass;
		this.phoneNumber = phoneNumber;
		this.idSubject = idSubject;
		this.salary = salary;
		this.title = title;
		this.status = status;
		this.userReceive = userReceive;
		this.description = description;
	}
	
}
