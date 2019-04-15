package com.nttduong.matchingme.service;

import java.util.List;

import com.nttduong.matchingme.model.MailBox;

public interface MailBoxService {
	public List<MailBox> getMailByUser(int idUser);
	public void addMail(MailBox mail);
}
