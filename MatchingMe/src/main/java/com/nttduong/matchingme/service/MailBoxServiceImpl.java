package com.nttduong.matchingme.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttduong.matchingme.dao.MailBoxDao;
import com.nttduong.matchingme.model.MailBox;

@Service
public class MailBoxServiceImpl implements MailBoxService {
	@Autowired
	private MailBoxDao mailboxDao;

	public void setMailBoxDao(MailBoxDao mailboxDao) {
		this.mailboxDao = mailboxDao;
	}

	@Override
	public List<MailBox> getMailByUser(int idUser) {
		return mailboxDao.getMailByUser(idUser);
	}

	@Override
	public void addMail(MailBox mail) {
		mailboxDao.addMail(mail);
	}

}
