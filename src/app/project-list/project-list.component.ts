import { Project } from '../Models/project';
import { Component } from '@angular/core';
import { ProjectProvider } from '../Services/project-provider';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent {
  public readonly projects: Project[];

  constructor(projectProvider: ProjectProvider) {
    this.projects = projectProvider.projects;
  }
}
