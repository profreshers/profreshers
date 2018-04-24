package com.pf.entity;

import java.util.Map;

import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

public class InterviewProcess {

	private long id;
	private Employer employer;

	private Map<String, String> interviewRoundTypeProcessMap;

	public Map<String, String> getInterviewRoundTypeProcessMap() {
		return interviewRoundTypeProcessMap;
	}

	public void setInterviewRoundTypeProcessMap(Map<String, String> interviewRoundTypeProcessMap) {
		this.interviewRoundTypeProcessMap = interviewRoundTypeProcessMap;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@OneToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	public Employer getEmployer() {
		return employer;
	}

	public void setEmployer(Employer employer) {
		this.employer = employer;
	}

}
