package com.pf.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Employer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String name;

	private String websiteURL;

	private String about;

	private InterviewRound interviewRound;

	private InterviewProcess interviewProcess;
	private List<Job> jobs;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@OneToOne(fetch = FetchType.LAZY, mappedBy = "employer", cascade = CascadeType.ALL)
	public InterviewRound getInterviewRound() {
		return interviewRound;
	}

	public void setInterviewRound(InterviewRound interviewRound) {
		this.interviewRound = interviewRound;
	}

	@OneToOne(fetch = FetchType.LAZY, mappedBy = "employer", cascade = CascadeType.ALL)
	public InterviewProcess getInterviewProcess() {
		return interviewProcess;
	}

	public void setInterviewProcess(InterviewProcess interviewProcess) {
		this.interviewProcess = interviewProcess;
	}

	public List<Job> getJobs() {
		return jobs;
	}

	public void setJobs(List<Job> jobs) {
		this.jobs = jobs;
	}

	public String getWebsiteURL() {
		return websiteURL;
	}

	public void setWebsiteURL(String websiteURL) {
		this.websiteURL = websiteURL;
	}

}
