import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job: any;

  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('jobId');
    this.jobService.getJobById(id).subscribe(
      response => {
        console.log(response);
        this.job = response;
      }
    );
  }

}
