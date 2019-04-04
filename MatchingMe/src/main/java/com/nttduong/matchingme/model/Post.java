package com.nttduong.matchingme.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "post", catalog = "matchingme", uniqueConstraints = @UniqueConstraint(columnNames = "Id"))
public class Post implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column
	private int id;
	
	@Column(name="Id_User")
	private String idUser;
	
	@Column(name="Id_Town")
	private String idTown;
	
	@Column(name="Id_District")
	private String idDistrict;

	@Column(name="Id_Province")
	private String idProvince;
	
	@Column(name="Id_Degree")
	private int idDegree;
	
	@Column(name="Id_Class")
	private int idClass;
	
	@Column(name="Id_Subject")
	private int idSubject;
	
	@Column
	private int money;
	
	@Column(name="Description")
	private String description;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getIdUser() {
		return idUser;
	}
	public void setIdUser(String idUser) {
		this.idUser = idUser;
	}
	public String getIdTown() {
		return idTown;
	}
	public void setIdTown(String idTown) {
		this.idTown = idTown;
	}
	public String getIdDistrict() {
		return idDistrict;
	}
	public void setIdDistrict(String idDistrict) {
		this.idDistrict = idDistrict;
	}
	public String getIdProvince() {
		return idProvince;
	}
	public void setIdProvince(String idProvince) {
		this.idProvince = idProvince;
	}
	public int getIdDegree() {
		return idDegree;
	}
	public void setIdDegree(int idDegree) {
		this.idDegree = idDegree;
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
	public int getMoney() {
		return money;
	}
	public void setMoney(int money) {
		this.money = money;
	}	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Post() {
		super();
	}
	
}
