import { ProjectProvider } from './Models/ProjectProvider';
import { ProjectListComponent } from './project-list/project-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonProvider } from './Models/PersonProvider';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProjectProvider,
    PersonProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
