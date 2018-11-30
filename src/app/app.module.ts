import { ProjectListComponent } from './project-list/project-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
