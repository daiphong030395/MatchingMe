package com.nttduong.matchingme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "devvn_xaphuongthitran", catalog = "matching_me", uniqueConstraints = @UniqueConstraint(columnNames = "xaid"))
public class Town {
	@Id
	@Column
	private int xaid;
	
	@Column
	private String name;
	
	@Column
	private String type;
	
	@Column
	private String maqh;

	public int getXaid() {
		return xaid;
	}

	public void setXaid(int xaid) {
		this.xaid = xaid;
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

	public String getMaqh() {
		return maqh;
	}

	public void setMaqh(String maqh) {
		this.maqh = maqh;
	}

}
