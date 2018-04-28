import { Component, OnInit } from '@angular/core';
import { JobsService } from './job/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jobService: JobsService) {
  }

  searchParam: string = '';
  jobsMasterList: any;
  jobs: any;

  ngOnInit() {
    this.jobsMasterList = this.jobService.getJobs();
  }

  filterJobs(selectedSkill: string) {
    this.jobs = this.jobsMasterList.filter(a => {
      a.skills.toUpperCase().includes(selectedSkill.toUpperCase());
    });
    this.jobService.setJobs(this.jobs);
  }

  filterJobsBySearchParam(){
    this.filterJobs(this.searchParam);
  }
}
