import { Person } from './Person';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
/**
 * Поставщик информации о пользователе.
 */
export class PersonProvider {
    public readonly person: Person;

    constructor() {
        this.person = new Person(
            'Олег Севостьянов',
            ['C#', 'Delphi'],
            ['HTML', 'CSS', 'TypeScript', 'Angular', 'powershell'],
            ['python'],
            new Date('1978-06-01')
        );
    }
}
