import { HashTag } from './HashTag';

/**
 * Описание проекта.
 */
export class Project {
    constructor (identificator: string, name: string, description: string, sourceCodeUrl: string, demoUrl: string, ... hashTags: HashTag[]) {
        this.identificator = identificator;
        this.name = name;
        this.description = description;
        this.hashTags = hashTags;
        this.sourceCodeUrl = sourceCodeUrl;
        this.demoUrl = demoUrl;
        this.hasSourceCodeUrl = (typeof sourceCodeUrl !== 'undefined')
            && (!!sourceCodeUrl)
            && (sourceCodeUrl.trim().length > 0);
        this.hasDemoUrl = (typeof demoUrl !== 'undefined')
        && (!!demoUrl)
        && (demoUrl.trim().length > 0);
    }

    /**
     *  Идентификатор проекта.
     */
    public readonly identificator: string;

    /**
     * Наименование пректа.
     */
    public readonly name: string;

    /**
     * Описание проекта.
     */
    public readonly description: string;

    /**
     * Список хештегов проекта.
     */
    public readonly hashTags: HashTag[];

    /**
     * Ссылка на исходный код.
     */
    public readonly sourceCodeUrl: string;

    /**
     * Признак наличия ссылки на исходный код.
     */
    public readonly hasSourceCodeUrl: boolean;

    /**
     * Ссылка на демонстрационный сайт с проектом.
     */
    public readonly demoUrl: string;

    /**
     * Признак наличия ссылки на демонстрационный сайт.
     */
    public readonly hasDemoUrl: boolean;
}

