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
                'iznakurnoz.Bot',
                'iznakurnoz.Bot',
                'Бот telegram для домашнего сервера на .Net Core.',
                'https://github.com/BooTheHamster/iznakurnoz.Bot',
                'https://github.com/BooTheHamster/iznakurnoz.Bot',
                HashTags.netcore,
                HashTags.telegram),
            new Project(
                'electap',
                'ElecTap',
                'прототип клик-игры',
                'https://github.com/BooTheHamster/electap',
                'https://github.com/BooTheHamster/electap',
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
                HashTags.react),
            new Project(
                'scripts',
                'JustScripts',
                'резервные копии скриптов на python, powershell ...',
                'https://github.com/BooTheHamster/scripts',
                'https://github.com/BooTheHamster/scripts',
                HashTags.python,
                HashTags.powershell),
            new Project(
                'sdl2-test',
                'SDL2 Test',
                'приложение для изучения библиотеки SDL2',
                'https://github.com/BooTheHamster/sdl2-test',
                'https://github.com/BooTheHamster/sdl2-test',
                HashTags.netcore,
                HashTags.sdl2)
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
