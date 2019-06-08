import { HashTags } from './HashTag';
import { Project } from './Project';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
/**
 * Список проектов.
 */
export class ProjectProvider {
    private readonly projectList: Project[];

    constructor() {
        this.projectList = [
            new Project(
                'electap',
                'ElecTap',
                'прототип клик-игры',
                'https://github.com/BooTheHamster/electap',
                'http://5.188.232.174/electap',
                HashTags.typescript,
                HashTags.canvas,
                HashTags.excaliburEngine,
                HashTags.angular),
            new Project(
                'tempgraph',
                'TempGraph',
                'отображение температуры в виде графиков',
                'https://github.com/BooTheHamster/tempgraph',
                'https://github.com/BooTheHamster/tempgraph',
                HashTags.typescript,
                HashTags.netcore,
                HashTags.postgresql,
                HashTags.react)
            ];
    }

    public get projects(): Project[] {
        return Object.assign([], this.projectList);
    }

    public projectByIdentificator(projectIdentificator: string): Project {
        const result = this.projects.find((project: Project) => {
            return project.identificator === projectIdentificator;
        });

        return result;
    }

}
