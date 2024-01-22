import {LanguageInteface} from "../../domaine/languages/Language.interface";
import {FrenchLanguage} from "../../domaine/languages/FrenchLanguage";
import {EnglishLanguage} from "../../domaine/languages/EnglishLanguage";



export class LanguageSystemAdapter{
    private readonly language: LanguageInteface;
    private static instance: LanguageSystemAdapter;

    private constructor() {

        const code = process.env.LANG || 'en-US';

        if (code.startsWith('fr')) {
            this.language = new FrenchLanguage();
        } else if (code.startsWith('en')) {
            this.language = new EnglishLanguage();
        } else {
            this.language = new EnglishLanguage();
        }
    }

    public static getInstance(): LanguageSystemAdapter {
        if (!this.instance) {
            this.instance = new LanguageSystemAdapter();
        }
        return this.instance;
    }

    public getLanguage(): LanguageInteface {
        return this.language;
    }
}