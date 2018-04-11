import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pro-Freshers!';
  jobs = [{
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
    "title": "Data Scientish",
    "designation": "Software Analyst Trainee",
    "companyName": "Big Basket",
    "experience": "0",
    "ctc": "5.5 LPA",
    "description": "description1",
    "location": "Bengaluru",
    "skills": "Java, JSP, SQL",
    "verified": false
  },{
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
