package com.pf.entity;

import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

public class InterviewRound {

	private Employer employer;
	// Written rounds
	private boolean w1;
	private boolean w2;
	private boolean w3;

	// Technical rounds
	private boolean t1;
	private boolean t2;
	private boolean t3;

	// Managerial rounds
	private boolean m1;
	private boolean m2;

	// HR rounds
	private boolean h1;
	private boolean h2;

	public boolean isW1() {
		return w1;
	}

	public void setW1(boolean w1) {
		this.w1 = w1;
	}

	public boolean isW2() {
		return w2;
	}

	public void setW2(boolean w2) {
		this.w2 = w2;
	}

	public boolean isW3() {
		return w3;
	}

	public void setW3(boolean w3) {
		this.w3 = w3;
	}

	public boolean isT1() {
		return t1;
	}

	public void setT1(boolean t1) {
		this.t1 = t1;
	}

	public boolean isT2() {
		return t2;
	}

	public void setT2(boolean t2) {
		this.t2 = t2;
	}

	public boolean isT3() {
		return t3;
	}

	public void setT3(boolean t3) {
		this.t3 = t3;
	}

	public boolean isM1() {
		return m1;
	}

	public void setM1(boolean m1) {
		this.m1 = m1;
	}

	public boolean isM2() {
		return m2;
	}

	public void setM2(boolean m2) {
		this.m2 = m2;
	}

	public boolean isH1() {
		return h1;
	}

	public void setH1(boolean h1) {
		this.h1 = h1;
	}

	public boolean isH2() {
		return h2;
	}

	public void setH2(boolean h2) {
		this.h2 = h2;
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
