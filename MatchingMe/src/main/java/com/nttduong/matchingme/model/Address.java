package com.nttduong.matchingme.model;

public class Address {
	int idTown;
	int idDistrict;
	int idProvince;
	String nameTown;
	String nameDistrict;
	String nameProvince;
	String address;
	
	public int getIdTown() {
		return idTown;
	}
	public void setIdTown(int idTown) {
		this.idTown = idTown;
	}
	public int getIdDistrict() {
		return idDistrict;
	}
	public void setIdDistrict(int idDistrict) {
		this.idDistrict = idDistrict;
	}
	public int getIdProvince() {
		return idProvince;
	}
	public void setIdProvince(int idProvince) {
		this.idProvince = idProvince;
	}
	public String getNameTown() {
		return nameTown;
	}
	public void setNameTown(String nameTown) {
		this.nameTown = nameTown;
	}
	public String getNameDistrict() {
		return nameDistrict;
	}
	public void setNameDistrict(String nameDistrict) {
		this.nameDistrict = nameDistrict;
	}
	public String getNameProvince() {
		return nameProvince;
	}
	public void setNameProvince(String nameProvince) {
		this.nameProvince = nameProvince;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress() {
		this.address = this.nameTown + ", " + this.getNameDistrict() + ", " + this.nameProvince;
	}
	public Address(int idTown, int idDistrict, int idProvince) {
		super();
		this.idTown = idTown;
		this.idDistrict = idDistrict;
		this.idProvince = idProvince;
	}
	public Address(int idTown, int idDistrict, int idProvince, String nameTown, String nameDistrict,
			String nameProvince, String address) {
		super();
		this.idTown = idTown;
		this.idDistrict = idDistrict;
		this.idProvince = idProvince;
		this.nameTown = nameTown;
		this.nameDistrict = nameDistrict;
		this.nameProvince = nameProvince;
		this.address = address;
	}
	public Address() {
		super();
	}
}
