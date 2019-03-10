package com.nttduong.matchingme.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "devvn_tinhthanhpho", catalog = "matching_me", uniqueConstraints = @UniqueConstraint(columnNames = "matp"))
public class Province implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column
	private int matp;
	
	@Column
	private String name;
	
	@Column
	private String type;

	public int getMatp() {
		return matp;
	}

	public void setMatp(int matp) {
		this.matp = matp;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Province() {
		super();
	}

	public Province(int matp, String name, String type) {
		super();
		this.matp = matp;
		this.name = name;
		this.type = type;
	}
}
