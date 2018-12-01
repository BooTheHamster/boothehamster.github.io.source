/**
 * Хештег.
 */
export class HashTag {
    constructor(text: string) {
        this.text = '#' + text;
    }

    /**
     * Текст хештега.
     */
    public readonly text: string;
}

/**
 * Доступные хештеги.
 */
export class HashTags {
    static typescript: HashTag = new HashTag('typescript');
    static canvas: HashTag = new HashTag('canvas');
    static excaliburEngine: HashTag = new HashTag('excalibur-engine');
    static angular: HashTag = new HashTag('angular');
}
