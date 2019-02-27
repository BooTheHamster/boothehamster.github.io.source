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
                HashTags.typescript,
                HashTags.canvas,
                HashTags.excaliburEngine,
                HashTags.angular),
            // new Project(
            //     'colormix',
            //     'Colormix',
            //     'проект пустышка для тестирования сайта',
            //     'https://github.com/BooTheHamster/electap',
            //     HashTags.typescript,
            //     HashTags.canvas,
            //     HashTags.excaliburEngine,
            //     HashTags.angular)
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
