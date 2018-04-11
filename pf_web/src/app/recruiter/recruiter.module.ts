import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { RecruitmentProcessComponent } from './recruitment-process/recruitment-process.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecruiterComponent, RecruitmentProcessComponent]
})
export class RecruiterModule { }
