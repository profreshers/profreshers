import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  showPopup: boolean = false;
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

   title = 'Pro-Freshers!';
  
   jobs: any;

}
