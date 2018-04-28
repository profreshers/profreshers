import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { JobModule } from './job/job.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { JobComponent } from './job/job/job.component';
import { AboutComponent } from './about/about.component';
import { JobsService } from './job/jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobModule,
    RecruiterModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
