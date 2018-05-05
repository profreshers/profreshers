import { Injectable } from '@angular/core';
import { of } from "rxjs/observable/of";
import { Observable } from 'rxjs/Observable';
@Injectable()
export class JobsService {

  jobsListMaster = [{
    "id": 1,
    "title": "Android developer",
    "designation": "Software Engineer",
    "companyName": "Persistent Systems Ltd.",
    "experience": "0",
    "ctc": "3.55 LPA",
    "description": "description",
    "location": "Goa",
    "skills": "Android, Java",
    "verified": false
  }, {
    "id": 2,
    "title": "Java Developer",
    "designation": "Software Engineer Trainee",
    "companyName": "NetCracker Technologies Ltd.",
    "experience": "0-2",
    "ctc": "4.5 LPA",
    "description": "description1",
    "location": "Bengaluru",
    "skills": "Java, JSP, SQL",
    "verified": true
  }, {
    "id": 3,
    "title": "Data Scientist",
    "designation": "Software Analyst Trainee",
    "companyName": "Big Basket",
    "experience": "0",
    "ctc": "5.5 LPA",
    "description": "description1",
    "location": "Bengaluru",
    "skills": "Java, JSP, SQL",
    "verified": false
  }];

  jobs: any;
  constructor() { }

  getJobs() {
    this.jobs = Object.assign(this.jobsListMaster);
    return this.jobs;
  }

  setJobs(filteredJobs: any) {
    this.jobs = filteredJobs;
  }

  getJobById(id: string): Observable<any> {
    let filteredJobs = this.jobs.filter(job => job.id == id);
    console.log(filteredJobs)
    return of(filteredJobs[0]);
  }

  getJobsBySearchParam(searchParam: string): Observable<any>{
    let filteredJobs = this.jobs.filter(job => job.skills.toUpperCase().includes(searchParam.toUpperCase())); 
    return of(filteredJobs);
  }
}
