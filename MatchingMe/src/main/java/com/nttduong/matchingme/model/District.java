package com.nttduong.matchingme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "devvn_quanhuyen", catalog = "matching_me", uniqueConstraints = @UniqueConstraint(columnNames = "maqh"))
public class District {
	@Id
	@Column
	private int maqh;
	@Column
	private String name;
	@Column
	private String type;
	@Column
	private String matp;

	public int getMaqh() {
		return maqh;
	}

	public void setMaqh(int maqh) {
		this.maqh = maqh;
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

	public String getMatp() {
		return matp;
	}

	public void setMatp(String matp) {
		this.matp = matp;
	}
}
