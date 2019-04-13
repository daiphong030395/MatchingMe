package com.nttduong.matchingme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "mailbox", catalog = "matchingme1", uniqueConstraints = @UniqueConstraint(columnNames = "id"))
public class MailBox {
	@Id
	@GeneratedValue
	@Column
	int id;

	@Column(name="idUser")
	int idUser;
	
	@Column(name="type")
	String type;
	
	@Column(name="content")
	String content;

	public int getId() {
		return id;
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public MailBox() {
		super();
	}

	public MailBox(int idUser, String type, String content) {
		super();
		this.idUser = idUser;
		this.type = type;
		this.content = content;
	}

	public MailBox(int id, int idUser, String type, String content) {
		super();
		this.id = id;
		this.idUser = idUser;
		this.type = type;
		this.content = content;
	}
}
