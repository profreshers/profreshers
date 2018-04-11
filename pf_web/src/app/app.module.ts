import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { JobModule } from './job/job.module';
import { RecruiterModule } from './recruiter/recruiter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobModule,
    RecruiterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
