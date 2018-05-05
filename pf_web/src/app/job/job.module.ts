import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsService } from './jobs.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    JobComponent,
    AddJobComponent,
    JobDetailComponent],
  providers: [
    JobsService,
  ]
})
export class JobModule {

}
