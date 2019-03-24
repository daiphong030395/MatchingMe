package com.nttduong.matchingme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "post", catalog = "matching_me", uniqueConstraints = @UniqueConstraint(columnNames = "idUser"))
public class Post {
	
	@Id
	@GeneratedValue
	@Column
	private int idPost;
	@Column
	private int idUser;
	@Column
	private String matp;
	@Column
	private String maqh;
	@Column
	private String xaid;
	@Column
	private int idDegree;
	@Column
	private int idClass;
	@Column
	private int idSubject;
	@Column
	private int money;
	
	public int getIdPost() {
		return idPost;
	}
	public void setIdPost(int idPost) {
		this.idPost = idPost;
	}
	public int getIdUser() {
		return idUser;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	public String getMatp() {
		return matp;
	}
	public void setMatp(String matp) {
		this.matp = matp;
	}
	public String getMaqh() {
		return maqh;
	}
	public void setMaqh(String maqh) {
		this.maqh = maqh;
	}
	public String getXaid() {
		return xaid;
	}
	public void setXaid(String xaid) {
		this.xaid = xaid;
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
	
	
	public Post() {
		super();
	}
	
	public Post(int idPost, int idUser, String matp, String maqh, String xaid, int idDegree, int idClass, int idSubject,
			int money) {
		super();
		this.idPost = idPost;
		this.idUser = idUser;
		this.matp = matp;
		this.maqh = maqh;
		this.xaid = xaid;
		this.idDegree = idDegree;
		this.idClass = idClass;
		this.idSubject = idSubject;
		this.money = money;
	}
	
	
}
