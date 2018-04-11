import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job/job/job.component';
import { RecruiterComponent } from './recruiter/recruiter/recruiter.component';
import { RecruitmentProcessComponent } from './recruiter/recruitment-process/recruitment-process.component';
import { AddJobComponent } from './job/add-job/add-job.component';

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'recruitment_process', component: RecruitmentProcessComponent },
  { path: 'add_job', component: AddJobComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
