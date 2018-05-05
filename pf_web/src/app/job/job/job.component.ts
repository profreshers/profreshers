import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  searchParam: string;
  showPopup: boolean = false;
  jobs: any;
  title = 'Pro-Freshers!';

  constructor(private router: Router, private route: ActivatedRoute, private service: JobsService) { }
  setShowPopup() {
    this.showPopup = true;
  }

  resetShowPopup() {
    this.showPopup = false;
  }

  ngOnInit() {
    console.log(this.router.url);
    this.jobs = this.service.getJobs();
  }

  getJobsBySearchParam() {
    this.service.getJobsBySearchParam(this.searchParam).subscribe(
      response => {
        this.jobs = response;
      }
    );
  }




}
