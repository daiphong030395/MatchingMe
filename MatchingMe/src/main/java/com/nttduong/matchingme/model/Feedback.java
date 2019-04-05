package com.nttduong.matchingme.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "feedback", catalog = "matchingme1", uniqueConstraints = @UniqueConstraint(columnNames = "Id"))
public class Feedback implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	@Column
	private int id;
	@Column
	private String type;
	@Column
	private String content;
	
	public int getId() {
		return id;
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
	public Feedback(int id, String type, String content) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
	}
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
}
