package com.nttduong.matchingme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttduong.matchingme.dao.ProvinceDao;
import com.nttduong.matchingme.model.Province;

@Service
public class ProvinceService {

	@Autowired
	private ProvinceDao provinceDao;
	
	// setter for customerDao
	public void setProvinceDao(ProvinceDao prDao) {
		this.provinceDao = prDao;
	}
	
	public Province getProvinceName(int id) {
		return provinceDao.findProvinceById(id);
	}
	
}
