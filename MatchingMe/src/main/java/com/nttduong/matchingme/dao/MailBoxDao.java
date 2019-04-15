package com.nttduong.matchingme.dao;

import java.util.List;

import com.nttduong.matchingme.model.MailBox;

public interface MailBoxDao {
	public List<MailBox> getMailByUser(int idUser);
	public void addMail(MailBox mail);
}
