package com.pf.service;

import java.sql.Date;
import java.util.List;

import com.pf.entity.Job;

public interface JobService {

	List<Job> getJobsByEmployerId(long employerId);

	List<Job> getJobsInTimeRange(Date fromDate, Date toDate);

}
