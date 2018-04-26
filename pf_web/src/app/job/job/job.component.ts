import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  showPopup: boolean = false;
  constructor() { }
  setShowPopup() {
    this.showPopup = true;
  }

  resetShowPopup() {
    this.showPopup = false;
  }

  ngOnInit() {
  }

  title = 'Pro-Freshers!';
  jobs = [{
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
    "title": "Data Scientish",
    "designation": "Software Analyst Trainee",
    "companyName": "Big Basket",
    "experience": "0",
    "ctc": "5.5 LPA",
    "description": "description1",
    "location": "Bengaluru",
    "skills": "Java, JSP, SQL",
    "verified": false
  }, {
    "id": 4,
    "title": "Angular Developer",
    "designation": "Software Engineer Trainee",
    "companyName": "Mindtree Ltd.",
    "experience": "0-2",
    "ctc": "2.8 LPA",
    "description": "description1",
    "location": "Bengaluru",
    "skills": "Java, JSP, SQL",
    "verified": true
  }]

}
