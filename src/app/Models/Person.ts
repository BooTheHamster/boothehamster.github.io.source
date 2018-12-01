/**
 * Пользователь.
 */
export class Person {
    constructor(name: string, advancedSkills: string[], basicSkills: string[], hobbySkills: string[], birthday: Date) {
        this.name = name;
        this.basicSkills = basicSkills;
        this.advancedSkills = advancedSkills;
        this.hobbySkills = hobbySkills;
        this.birthday = birthday;
    }

    /**
     * Имя и фамилия пользователя.
     */
    public readonly name: string;

    /**
     * Продвинутые скилы.
     */
    public readonly advancedSkills: string[];

    /**
     * Начальные скилы.
     */
    public readonly basicSkills: string[];

    /**
     * Хобби-скилы.
     */
    public readonly hobbySkills: string[];

    /**
     * Дата рождения.
     */
    public readonly birthday: Date;
}
