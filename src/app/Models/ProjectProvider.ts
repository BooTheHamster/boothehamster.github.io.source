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
    constructor() {
        this.projects = [
            new Project(
                'electap',
                'ElecTap',
                'прототип клик-игры',
                'https://github.com/BooTheHamster/electap',
                HashTags.typescript,
                HashTags.canvas,
                HashTags.excaliburEngine,
                HashTags.angular),
            new Project(
                'electap',
                'ElecTap',
                'прототип клик-игры',
                'https://github.com/BooTheHamster/electap',
                HashTags.typescript,
                HashTags.canvas,
                HashTags.excaliburEngine,
                HashTags.angular)
            ];
    }
    public readonly projects: Project[];
}
