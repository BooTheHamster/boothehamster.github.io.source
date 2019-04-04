import { ProjectProvider } from './Models/ProjectProvider';
import { ProjectListComponent } from './project-list/project-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonProvider } from './Models/PersonProvider';
import { ElectapComponent } from './electap/electap.component';
import { ProjectLinkComponent } from './project-link/project-link.component';

const appRoutes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'electap', component: ElectapComponent },
    { path: '**', component: AppComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        PersonalInfoComponent,
        ProjectListComponent,
        ElectapComponent,
        ProjectLinkComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [ProjectProvider, PersonProvider],
    bootstrap: [AppComponent],
})

export class AppModule {}
