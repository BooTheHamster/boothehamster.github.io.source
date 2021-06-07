import { Component } from '@angular/core';
import { PersonProvider } from '../Services/person-provider';
import { Person } from '../Models/person';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.less'],
})
export class PersonalInfoComponent {
    public readonly person: Person;
    public readonly advancedSkills: string[];
    public readonly basicSkills: string[];
    public readonly hobbySkills: string[];

    constructor(personProvider: PersonProvider) {
        this.person = personProvider.person;
        this.advancedSkills = PersonalInfoComponent.prepareSkills(this.person.advancedSkills);
        this.basicSkills = PersonalInfoComponent.prepareSkills(this.person.basicSkills);
        this.hobbySkills = PersonalInfoComponent.prepareSkills(this.person.hobbySkills);
    }

    private static prepareSkills(skills: string[]): string[] {
        const result: string[] = [];
        let skillLine = '';
        let index = 0;

        skills.forEach(skill => {
            if (skillLine.length > 0) {
                skillLine += ', ';
            }

            skillLine += skill;
            index++;

            if (index === 4) {
                result.push(skillLine);
                index = 0;
                skillLine = '';
            }
        });

        result.push(skillLine);

        return result;
    }
}
